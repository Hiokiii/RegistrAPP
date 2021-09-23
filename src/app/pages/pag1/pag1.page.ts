import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pag1',
  templateUrl: './pag1.page.html',
  styleUrls: ['./pag1.page.scss'],
})
export class Pag1Page implements OnInit {

  ngOnInit() {
  }

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

}
