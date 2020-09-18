import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actualizar-reserva',
  templateUrl: './actualizar-reserva.component.html',
  styleUrls: ['./actualizar-reserva.component.scss']
})
export class ActualizarReservaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  validarEnteroPositivoMayorA(valor: any, limite: any){
    if(valor >= limite) {
      return true
    }
    return false
}

}
