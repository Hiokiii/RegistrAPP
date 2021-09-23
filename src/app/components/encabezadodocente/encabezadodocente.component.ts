import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-encabezadodocente',
  templateUrl: './encabezadodocente.component.html',
  styleUrls: ['./encabezadodocente.component.scss'],
})
export class EncabezadodocenteComponent implements OnInit {

  @Input() titulo:string='';
  @Input() icono: string='';
  constructor() { }

  ngOnInit() {}

}
