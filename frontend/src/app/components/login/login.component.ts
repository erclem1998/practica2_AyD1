import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';

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

  constructor(private login:LoginService) { }

  ngOnInit(): void {
  }

  AtributoVacio(us: string){
    if(us == ''){
      return true;
    }
    return false;
  }

  Login(){
    let respuesta = { 
      msg: ''
    }
    if((!this.AtributoVacio(this.user.username)) && (!this.AtributoVacio(this.user.passwd))){ this.login.Login(this.user).subscribe(res => { respuesta = JSON.parse(JSON.stringify(res)); if(respuesta.msg == 'login correcto'){ alert('Login Correcto');} else if(respuesta.msg == 'passwd incorrecto'){ alert('Contraseña incorrecto');} });}
  }
}
