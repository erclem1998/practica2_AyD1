import { Component, OnInit } from '@angular/core';
import { CrearUserService } from '../../services/crear_usuario/crear-user.service'

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent implements OnInit {
  usuario = {
    dpi: null,
    username: '',
    passwd: '',
    correo: '',
    edad: null
  };

  constructor(private crear:CrearUserService) { }

  ngOnInit(): void {
  }

  DPI_Longitud(num:number){
    if(num.toString().length == 7){
      return 'dpi valido';
    }
    return 'dpi invalido'
  }

  Registrar(){
    console.log(this.usuario);
  }
}
