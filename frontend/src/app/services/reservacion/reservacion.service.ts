import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { baseURL } from '../shared/baseURL';
import { Reservacion } from "../../models/reservacion";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ReservacionService {

  constructor(private  http:HttpClient) { }

  getReservaciones():Observable<Reservacion[]>{
    return this.http.get<Reservacion[]>(baseURL+'ver_reservaciones');
  }

  Eliminar(id_reservacion){
    let params = new HttpParams().set("id_reservacion",id_reservacion);
    return this.http.delete(baseURL+"eliminar_reservacion",{params:params});
  }
  
}
