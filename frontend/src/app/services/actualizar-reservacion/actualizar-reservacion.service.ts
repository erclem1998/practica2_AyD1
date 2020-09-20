import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Reservacion } from 'src/app/models/reservacion';

@Injectable({
  providedIn: 'root'
})
export class ActualizarReservacionService {

  readonly API_URL = 'http://localhost:3000/actualizar_reservacion'

  constructor(private http: HttpClient) { }

  actualizar(reservacion: Reservacion) {
    return this.http.post(this.API_URL,reservacion)
  }
}
