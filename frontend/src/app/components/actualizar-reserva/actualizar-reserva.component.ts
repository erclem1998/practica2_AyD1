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
    if(valor % 1 != 0){
      return false 
    }

    if(limite < 0) {
      return false
    }
    if(valor >= limite) {
      return true
    }
    return false
}

}
