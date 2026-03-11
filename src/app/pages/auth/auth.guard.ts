import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AppStorageService } from '../../app-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private storage: AppStorageService
  ) { }

  async canActivate(): Promise<boolean> {

    const session = await this.storage.get(this.storage.KEY_SESSION);

    if (session) {
      return true;
    }

    await this.router.navigateByUrl('/login');
    return false;
  }
}