import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { usuarios } from '../usuarios';

@Component({
  selector: 'app-home-alumno',
  templateUrl: './home-alumno.page.html',
  styleUrls: ['./home-alumno.page.scss'],
})
export class HomeAlumnoPage implements OnInit {
 usuario:any;

constructor(private activatedRoute: ActivatedRoute) { 
  this.activatedRoute.queryParams.subscribe((params)=>{
    const userId = params['id'];
    
      this.usuario = usuarios.find((usuarios) => userId.id === parseInt(userId, 10));
    }
  
    )};
  ngOnInit() {
  }

}








