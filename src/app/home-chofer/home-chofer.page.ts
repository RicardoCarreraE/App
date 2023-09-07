import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { usuarios } from '../usuarios';

@Component({
  selector: 'app-home-chofer',
  templateUrl: './home-chofer.page.html',
  styleUrls: ['./home-chofer.page.scss'],
})
export class HomeChoferPage implements OnInit {
  usuario: any; 
  chofer: any;

  constructor(private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.queryParams.subscribe((params)=>{
      const userId = params['id'];
      
        this.usuario = usuarios.find((usuarios) => userId.id === parseInt(userId));
      }
  )};

  ngOnInit() {
    // Obtener el objeto de usuario del estado del enrutador
    this.chofer = this.activatedRoute.snapshot.paramMap.get('chofer');
  }
}

