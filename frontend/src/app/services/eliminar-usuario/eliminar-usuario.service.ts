import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EliminarUsuarioService {

  readonly API_URL = 'http://localhost:3000/eliminar_usuario'

  constructor(private http: HttpClient) { }

  eliminar(dpi: number) {
    return this.http.post(this.API_URL,{dpi: dpi})
  }
  
  deleteFakeUserDB(dpi: number) {
    return this.http.get('assets/fakedb/fakeusertable.json');
  }
}
