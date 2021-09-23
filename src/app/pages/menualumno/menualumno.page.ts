import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menualumno',
  templateUrl: './menualumno.page.html',
  styleUrls: ['./menualumno.page.scss'],
})
export class MenualumnoPage implements OnInit {

  usuario:string='';

  constructor(private activeroute:ActivatedRoute, private router:Router) {
    this.activeroute.queryParams.subscribe(
      params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.usuario = this.router.getCurrentNavigation().extras.state.miusuario.username;
        console.log(this.usuario);
      }  
    });

  }

  ngOnInit() {
  }

}
