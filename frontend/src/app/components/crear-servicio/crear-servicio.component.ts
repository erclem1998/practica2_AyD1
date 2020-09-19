import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-servicio',
  templateUrl: './crear-servicio.component.html',
  styleUrls: ['./crear-servicio.component.scss']
})
export class CrearServicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  VerificarInicialMay(Nombre:string):boolean{
      if(Nombre.charCodeAt(0) >=65 && Nombre.charCodeAt(0) <=90){
        return true;
      }
    return false;
  }

}
