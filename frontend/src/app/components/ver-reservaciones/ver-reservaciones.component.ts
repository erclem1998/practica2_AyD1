import { Component, OnInit } from '@angular/core';
import { Reservacion } from "../../models/reservacion";
import { ReservacionService } from "../../services/reservacion/reservacion.service";

@Component({
  selector: 'app-ver-reservaciones',
  templateUrl: './ver-reservaciones.component.html',
  styleUrls: ['./ver-reservaciones.component.scss']
})
export class VerReservacionesComponent implements OnInit {

  lista_reservaciones:Reservacion[]=[];
  lista_reservacionesTabla:Reservacion[]=[];

  constructor(private ServicioReservacion:ReservacionService) { 
    this.obtenerR();
  }

  ngOnInit(): void {
  }

  obtenerR(){
    console.log(this.ServicioReservacion.getReservaciones().subscribe((res: Reservacion[])=>{
      this.lista_reservaciones=res;
      this.lista_reservacionesTabla=res;
      console.log(res);
    },(err)=>{
      console.log(err);
    }));
  }

  ObtenerReservacionesUsuario(dpi:number){
    this.lista_reservacionesTabla=[];
    for(let i=0;i<this.lista_reservaciones.length;i++){
      if(this.lista_reservaciones[i].dpi==dpi){
        this.lista_reservacionesTabla.push(this.lista_reservaciones[i]);
      }
    }
    return {
      newlength:this.lista_reservacionesTabla.length,
      oldlength:this.lista_reservaciones.length
    }
  }

}
