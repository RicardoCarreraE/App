import { Component, OnInit } from '@angular/core';
import { usuario } from '../modelo/usuario';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-perfil-alumno',
  templateUrl: './perfil-alumno.page.html',
  styleUrls: ['./perfil-alumno.page.scss'],
})
export class PerfilAlumnoPage implements OnInit {
  alumno: any = {
    nombre: '',
    rut: '',
    correo: '',
    telefono: '',
  };

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.alumno = navigation.extras.state['user'];
    }
  }

  ngOnInit() {
  }
}



