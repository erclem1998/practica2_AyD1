import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EliminarUsuarioService {

  readonly API_URL = 'http://localhost:3000/eliminar-usuario'

  constructor(private http: HttpClient) { }

  
  deleteFakeUserDB(dpi: number) {
    return this.http.get<any[]>('assets/fakedb/fakeusertable.json');
  }
}
