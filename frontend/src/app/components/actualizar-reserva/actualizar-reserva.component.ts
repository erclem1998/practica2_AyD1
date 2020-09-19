import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Reservacion } from '../../models/reservacion'
import { ActualizarReservacionService } from '../../services/actualizar-reservacion/actualizar-reservacion.service'

@Component({
  selector: 'app-actualizar-reserva',
  templateUrl: './actualizar-reserva.component.html',
  styleUrls: ['./actualizar-reserva.component.scss']
})
export class ActualizarReservaComponent implements OnInit {

  FG = new FormGroup({
    id_reservacion: new FormControl('', [
      Validators.required
    ]),
    num_habitaciones: new FormControl('', [
      Validators.required
    ]),
    fecha_entrada: new FormControl('', [
      Validators.required
    ]),
    fecha_salida: new FormControl('', [
      Validators.required
    ]),
    num_adultos: new FormControl('', [
      Validators.required
    ]),
    num_ninios: new FormControl('', [
      Validators.required
    ]),
    total: new FormControl('', [
      Validators.required
    ]),
    dpi: new FormControl('', [
      Validators.required
    ]),
  });

  constructor(private reservService: ActualizarReservacionService) { }

  ngOnInit(): void {
  }

  validarEnteroPositivoMayorA(valor: any, limite: any) {
    if (valor % 1 != 0) {
      return false
    }

    if (limite % 1 != 0) {
      return false
    }

    if (limite < 0) {
      return false
    }
    if (valor >= limite) {
      return true
    }
    return false
  }

  validarFormatoFecha(fecha: string) {
    var af = fecha.split("/")
    if (fecha.length != 10) {
      return undefined
    }
    if (af.length == 3) {
      if (
        fecha.includes(".") ||
        isNaN(Number(af[0])) ||
        isNaN(Number(af[1])) ||
        isNaN(Number(af[2]))) {
        return undefined
      }
      return fecha
    }
    return null
  }

  async actualizar(reservacion: Reservacion): Promise<any> {
    if(
      !this.validarEnteroPositivoMayorA(reservacion.id_reservacion,1)||
      !this.validarEnteroPositivoMayorA(reservacion.num_habitaciones,1)||
      this.validarFormatoFecha(reservacion.fecha_entrada) == null||
      this.validarFormatoFecha(reservacion.fecha_entrada) == undefined||
      this.validarFormatoFecha(reservacion.fecha_salida) == null||
      this.validarFormatoFecha(reservacion.fecha_salida) == undefined||
      !this.validarEnteroPositivoMayorA(reservacion.num_adultos,1)||
      !this.validarEnteroPositivoMayorA(reservacion.num_ninios,0)||
      !this.validarEnteroPositivoMayorA(reservacion.total,0)||
      !this.validarEnteroPositivoMayorA(reservacion.dpi,1)
      ){
      alert("Se encontraron errores en el formato de los parametros")
      return false
    }

    await this.reservService.actualizar(reservacion).subscribe((res: any) => {
      alert(res.message)
      return true
    })
  }

  get idFC() {
    return this.FG.get('id_reservacion');
  }
  get numHFC() {
    return this.FG.get('num_habitaciones');
  }
  get feFC() {
    return this.FG.get('fecha_entrada');
  }
  get fsFC() {
    return this.FG.get('fecha_salida');
  }
  get nAFC() {
    return this.FG.get('num_adultos');
  }

  get nNFC() {
    return this.FG.get('num_ninios');
  }

  get totalFC() {
    return this.FG.get('total');
  }

  get dpiFC() {
    return this.FG.get('dpi');
  }

}
