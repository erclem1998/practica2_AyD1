import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { baseURL } from '../shared/baseURL';
import { Reservacion } from '../../models/reservacion';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ReservacionService {

  constructor(private http: HttpClient) { }

  getFakeReservationDB(): Observable<any[]> {
    return this.http.get<any[]>('assets/fakedb/fakereservationtable.json');
  }

  postreservation(reservacion: Reservacion): Observable<any[]> {
    return this.http.post<any[]>(baseURL + 'reservacion', reservacion);
  }

}
