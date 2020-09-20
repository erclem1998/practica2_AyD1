import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CrearServicioService {

  constructor(private http: HttpClient) { }

  CrearServicio(servicio:any) {

    

    if(servicio.Nom=='D'){
      return null;
    }
    console.log('llega');
    console.log(servicio);
    return this.http.post('http://localhost:3000/crear_servicio',servicio,httpOptions);
  }

  getFakeServiceDB():Observable<any[]>{
    return this.http.get<any[]>('assets/fakedb/fakeservices.json');
  }

}
