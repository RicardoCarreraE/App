import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

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
  
  inicio(){
    let alu: NavigationExtras = {
      state: {alumno: this.alumno.value.rut},
    };
    let cho: NavigationExtras = {
      state: {alumno: this.chofer.value.rut},
    };
    if(this.alumno.value.rut === this.desRut && this.alumno.value.pass === this.desPass){
      this.router.navigate(['/home-alumno'],alu);
    }
    if(this.chofer.value.rut === this.desRut && this.chofer.value.pass === this.desPass){
      this.router.navigate(['/home-chofer'],cho);
    }
    else{
      
    }
    
  }

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
