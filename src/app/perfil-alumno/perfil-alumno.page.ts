import { Component, OnInit } from '@angular/core';
import { usuarios } from '../usuarios';
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
    // Recupera los datos del alumno logueado desde usuarios.ts
    // Puedes utilizar alguna lógica para identificar al alumno específico, por ejemplo, su nombre.
    // Aquí se asume que utilizas el nombre para identificar al alumno.
    const nombreAlumnoLogueado = 'Nombre del alumno logueado'; // Reemplaza con el nombre real del alumno logueado
    this.alumno = usuarios.find((user) => user.nombre === nombreAlumnoLogueado) || this.alumno;
  }
}



