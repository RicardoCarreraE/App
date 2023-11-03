import { Component, OnInit } from '@angular/core';
import { usuario } from '../modelo/usuario';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-perfil-chofer',
  templateUrl: './perfil-chofer.page.html',
  styleUrls: ['./perfil-chofer.page.scss'],
})
export class PerfilChoferPage implements OnInit {
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