import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseURL';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private  http:HttpClient) {}

  getMockUsers():Observable<any[]> {
    return this.http.get<any[]>('assets/fakedb/fakeusertable.json');
  }

  Login(user: any){
    return this.http.post(baseURL+'login',user);
  }
}
