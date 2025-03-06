import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private storage: Storage) {}

  async set(key: string, value: any): Promise<boolean> {
    let result: any;

    try {
      result = await this.storage.set(key, value);
    } catch {
      result = false;
    }

    return result !== false;
  }

  async get(key: string): Promise<any> {
    let result: any;

    try {
      result = await this.storage.get(key);
    } catch {}

    return result;
  }

  remove(key: string) {
    this.storage.remove(key);
  }

  clear() {
    this.storage.clear();
  }
}
