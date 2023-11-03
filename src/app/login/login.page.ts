import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ConsumoapiService } from '../service/consumoapi.service';
import { usuario } from '../modelo/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loading = false;
  private typeuser!: usuario;
  textRut = "Rut";
  textPass = "Contraseña";
  desRut = "Ingrese Rut";
  desPass = "Ingrese Contraseña";
  textBtn: string = 'Ingresar';
  crearCta = "Crear Cuenta";

  usuario = new FormGroup({
    rut: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(12)]),
    contraseña: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(12)]),
  });



  async inicio() {
    this.loading = true;

  
    this.consumoapiService.login(this.usuario.value.rut!, this.usuario.value.contraseña!).subscribe(
      (response) => {
        if (response && response.body) {
          if (response.body.message === "Inicio de sesión como alumno exitoso") {
            this.router.navigate(['/home-alumno']);
          } else if (response.body.message === "Inicio de sesión como chofer exitoso") {
            this.router.navigate(['/home-chofer']);
          } else {
            this.presentAlert('Credenciales incorrectas', 'Por favor, vuelve a intentarlo.');
          }
        } else {
          this.presentAlert('Error', 'Ocurrió un error durante el inicio de sesión.');
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error en inicio de sesión:', error.error); // Muestra el mensaje de error específico recibido del servidor
        this.loading = false;
      }
    )
  }
  
  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  constructor(
    private router: Router,
    private consumoapiService: ConsumoapiService,
    private alertController: AlertController
  ) {}

  ngOnInit() {}
}
