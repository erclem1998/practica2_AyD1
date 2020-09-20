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

  async obtenerR():Promise<any> {
    await this.ServicioReservacion.getReservaciones().subscribe((res: Reservacion[]) => {
      for(let i=0;i<res.length;i++){
        res[i].fecha_entrada=this.obtenerFecha(res[i].fecha_entrada);
        res[i].fecha_salida=this.obtenerFecha(res[i].fecha_salida);
      }
      this.lista_reservaciones = res;
      this.lista_reservacionesTabla = res;
      this.obtenerDpi();
      return res;
    })
  }

  obtenerFecha(fecha:string){
    return fecha.substring(0,10);
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
  selected: any;

  listaDpi: any[] = [];
  selectedDpi: any;

  verOpcion(sele) {
    switch (sele) {
      case 'Todos':
        this.todos();
        return 0;
      case 'Por Usuario':
        this.ObtenerReservacionesUsuario(sele);
        return 1;
      case 'Top 3 de reservaciones':
        alert('Esto es un top 3');
        return 2;
      case 'Reservaciones en fecha especifica':
        alert('Esto es por fecha Especifica');
        return 3;
    }
  }

  todos() {
    this.lista_reservacionesTabla = [];
    this.lista_reservacionesTabla = this.lista_reservaciones;
    return true;
  }

  obtenerDpi() {
    for (let i = 0; i < this.lista_reservaciones.length; i++) {
      if (i == 0) {
        this.listaDpi.push({ dpi: this.lista_reservaciones[i].dpi });
      }
      else {
        var flag = false;
        for (let j = 0; j < this.listaDpi.length; j++) {
          if (this.listaDpi[j].dpi == this.lista_reservaciones[i].dpi) {
            flag = true;
            break;
          }
        }
        if (flag == false) {
          this.listaDpi.push({ dpi: this.lista_reservaciones[i].dpi });
        }
      }
    }
    return true;
  }

}
