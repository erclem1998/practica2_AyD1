import { Component, OnInit } from '@angular/core';
import { Reservacion } from "../../models/reservacion";
import { ReservacionService } from "../../services/reservacion/reservacion.service";

@Component({
  selector: 'app-ver-reservaciones',
  templateUrl: './ver-reservaciones.component.html',
  styleUrls: ['./ver-reservaciones.component.scss']
})
export class VerReservacionesComponent implements OnInit {

  lista_reservaciones: Reservacion[] = [];
  lista_reservacionesTabla: Reservacion[] = [];

  constructor(private ServicioReservacion: ReservacionService) {
    this.obtenerR();
  }

  ngOnInit(): void {
  }

  obtenerR() {
    this.ServicioReservacion.getReservaciones().subscribe((res: Reservacion[]) => {
      this.lista_reservaciones = res;
      this.lista_reservacionesTabla = res;
      console.log(res);
    }, (err) => {
      console.log(err);
    })
    this.obtenerDpi();
  }

  ObtenerReservacionesUsuario(dpi: number) {
    this.lista_reservacionesTabla = [];
    for (let i = 0; i < this.lista_reservaciones.length; i++) {
      if (this.lista_reservaciones[i].dpi == dpi) {
        this.lista_reservacionesTabla.push(this.lista_reservaciones[i]);
      }
    }
    return {
      newlength: this.lista_reservacionesTabla.length,
      oldlength: this.lista_reservaciones.length
    }
  }

  listaOpciones: any[] = [
    { viewValue: 'Todos' },
    { viewValue: 'Por Usuario' },
    { viewValue: 'Top 3 de reservaciones' },
    { viewValue: 'Reservaciones en fecha especifica' }
  ];
  selected = this.listaOpciones[2].viewValue;

  listaDpi: any[] =[];

  verOpcion() {
    switch (this.selected) {
      case 'Todos':
        alert('Esto es para todos');
        break;
      case 'Por Usuario':
        alert('Esto es por Usuario');
        break;
      case 'Top 3 de reservaciones':
        alert('Esto es un top 3');
        break;
      case 'Reservaciones en fecha especifica':
        alert('Esto es por fecha Especifica');
        break;
    }
  }

  obtenerDpi(){
    for(let i=0;i<this.lista_reservaciones.length;i++){
      if(i==0){
        this.listaDpi.push({dpi:this.lista_reservaciones[i].dpi});
      }
      else{
        var flag=false;
        for(let j=0;j<this.listaDpi.length;j++){
          if(this.listaDpi[j].dpi==this.lista_reservaciones[i].dpi){
            flag=true;
            break;
          }
        }
        if(flag==false){
          this.listaDpi.push({dpi:this.lista_reservaciones[i].dpi});
        }
      }
    }
  }

}
