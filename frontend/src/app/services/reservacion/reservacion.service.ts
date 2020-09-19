import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseURL';
import { Reservacion } from "../../models/reservacion";

@Injectable({
  providedIn: 'root'
})
export class ReservacionService {

  constructor(private  http:HttpClient) { }

  getReservaciones():Observable<Reservacion[]>{
    return this.http.get<Reservacion[]>(baseURL+'ver_reservaciones');
  }
}
