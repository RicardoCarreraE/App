import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home-alumno',
  templateUrl: './home-alumno.page.html',
  styleUrls: ['./home-alumno.page.scss'],
})
export class HomeAlumnoPage implements OnInit {
 
 alumno: any;
 

constructor(private activatedRoute: ActivatedRoute, private router: Router) { 
  this.activatedRoute.queryParams.subscribe(params => {
    if (this.router.getCurrentNavigation()?.extras.state) {
        this.alumno = this.router.getCurrentNavigation()?.extras.state?.['user'];
  
    }
});
    }

  ngOnInit() {
  }

}








