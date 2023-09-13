import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController) {}

  // Función para redirigir al usuario a la página de alumno
  ingresarComoAlumno() {
    this.navCtrl.navigateForward('/home-alumno');
  }

  // Función para redirigir al usuario a la página de chofer
  ingresarComoChofer() {
    this.navCtrl.navigateForward('/home-chofer');
  }
}
