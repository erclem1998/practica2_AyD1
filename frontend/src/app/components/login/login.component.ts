import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = {
    username: '',
    passwd: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  AtributoVacio(us: string){
    if(us == ''){
      return true;
    }
    return false;
  }

  Login(){
  }
}
