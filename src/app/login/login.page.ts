import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { usuarios } from '../usuarios'; // Importa el archivo de datos de usuarios
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  textRut = "Rut";
  textPass = "Contraseña";
  desRut = "Ingrese Rut";
  desPass = "Ingrese Contraseña";
  ingresar = "Ingresar";
  crearCta = "Crear Cuenta";

  alumno = new FormGroup ({
    rut: new FormControl('',[Validators.required, Validators.minLength(1), Validators.maxLength(12)]),
    pass: new FormControl('',[Validators.required, Validators.minLength(4), Validators.maxLength(12)]),
  });   
   chofer = new FormGroup ({
    rut: new FormControl('',[Validators.required, Validators.minLength(1), Validators.maxLength(12)]),
    pass: new FormControl('',[Validators.required, Validators.minLength(4), Validators.maxLength(12)]),
  });  

  constructor(private router: Router, private alertController: AlertController) { }
  
  async inicio(){
    // Obtiene el valor del rut y contraseña ingresados
    const rutIngresado = this.alumno.value.rut;
    const passIngresado = this.alumno.value.pass;

    // Busca al usuario en la lista de usuarios
    const usuario = usuarios.find((user) => user.rut === rutIngresado && user.contraseña === passIngresado);

    if (usuario) {
      // Redirige al usuario al perfil correspondiente según su rol
      this.redirigirSegunRol(usuario.rol, usuario);
    } else {
      // Las credenciales son incorrectas, muestra una alerta
      const alert = await this.alertController.create({
        header: 'Credenciales Incorrectas',
        message: 'Por favor, vuelva a intentar.',
        buttons: ['OK']
      });
  
      await alert.present();
    }
  }

  redirigirSegunRol(rol: string, usuario: any) {
    switch (rol) {
      case 'alumno':
        this.router.navigate(['/home-alumno']);
        break;
      case 'chofer':
        let chofer: NavigationExtras = {
          state: { chofer: usuario }, // usuario es el objeto del chofer
        };
        this.router.navigate(['/home-chofer'], chofer);
        break;
      default:
        console.log('Rol no reconocido');
    }
  }

  ngOnInit() {
  }
}














