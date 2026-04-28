import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-update-alert',
    templateUrl: './update-alert.component.html',
    styleUrls: ['./update-alert.component.scss'],
})
export class UpdateAlertComponent {

    @Input() appVersion = '';
    @Input() apiVersion = '';
    @Input() isIos = false;

    constructor(private modalCtrl: ModalController) { }

    updateNow(): void {
        this.modalCtrl.dismiss('update');
    }

    later(): void {
        this.modalCtrl.dismiss();
    }
}
