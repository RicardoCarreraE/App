import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {

  textRut = "Rut";
  textPass = "Contraseña";
  desRut = "Ingrese Rut";
  desPass = "Ingrese Contraseña";
  restablecer = "Restablecer";
  reingrese = "Reingrese Contraseña";
  repitaCont = "Reingrese Contraseña"

  constructor() { }

  ngOnInit() {
  }

}
