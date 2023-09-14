import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.page.html',
  styleUrls: ['./viajes.page.scss'],
})
export class ViajesPage {
  constructor(private modalController: ModalController) {}

  async verMapa() {
    const modal = await this.modalController.create({
      component: 'mapaModal', // Debe coincidir con el ID del ion-modal en tu HTML
      componentProps: {
        // Aquí puedes pasar datos adicionales al modal si es necesario
      },
    });
    return await modal.present();
  }
}

