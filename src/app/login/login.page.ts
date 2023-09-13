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
  loading = false;
  textRut = "Rut";
  textPass = "Contraseña";
  desRut = "Ingrese Rut";
  desPass = "Ingrese Contraseña";
  ingresar = "Ingresar";
  crearCta = "Crear Cuenta";

  usuario = new FormGroup ({
    rut: new FormControl('',[Validators.required, Validators.minLength(1), Validators.maxLength(12)]),
    pass: new FormControl('',[Validators.required, Validators.minLength(4), Validators.maxLength(12)]),
    nombre: new FormControl('',[Validators.required, Validators.minLength(4), Validators.maxLength(12)]),
    correo: new FormControl('',[Validators.required, Validators.minLength(4), Validators.maxLength(12)]),
    telefono: new FormControl('',[Validators.required, Validators.minLength(4), Validators.maxLength(12)]),
  });   
    

  constructor(private router: Router, private alertController: AlertController) { }
  
  async inicio(){
    // Establece loading en true para mostrar la animación
    this.loading = true;
  
    // Obtiene el valor del rut y contraseña ingresados
    const rutIngresado = this.usuario.value.rut;
    const passIngresado = this.usuario.value.pass;
  
    // Simula una demora de 2 segundos para la lógica de inicio de sesión (debes ajustar esto)
    setTimeout(async () => {
      // Simulación de inicio de sesión exitoso
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
  
      // Establece loading en false después de completar la acción
      this.loading = false;
    }, 1200);   }

    redirigirSegunRol(rol: string, usuario: any) {
      let rutaInicio = '';
    
      switch (rol) {
        case 'alumno':
          rutaInicio = '/home-alumno';
          break;
        case 'chofer':
          rutaInicio = '/home-chofer';
          break;
        default:
          rutaInicio = '/login'; // Redirige al login si el rol es desconocido
      }
    
      const navigationExtras: NavigationExtras = {
        state: { user: usuario }
      };
    
      this.router.navigate([rutaInicio], navigationExtras);
    }

  ngOnInit() {
  }
}
