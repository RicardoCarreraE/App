import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-chofer',
  templateUrl: './home-chofer.page.html',
  styleUrls: ['./home-chofer.page.scss'],
})
export class HomeChoferPage implements OnInit {
  chofer: any; // Declaración de la propiedad chofer

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // Obtener el objeto de usuario del estado del enrutador
    this.chofer = this.activatedRoute.snapshot.paramMap.get('chofer');
  }
}

