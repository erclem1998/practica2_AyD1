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

  respuesta = {
    msg: ''
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

  Edad_Valida(num:number){
    if(num > 0){
        if(num >= 18){
          return num;
        }
    }
    return 'edad no valida';
  }

  Registrar(){
    if((this.DPI_Longitud(this.usuario.dpi)=='dpi valido') && (this.Edad_Valida(this.usuario.edad)!='edad no valida')){
      this.crear.RegistrarUsuario(this.usuario).subscribe((res:any)=>{
        this.respuesta = JSON.parse(JSON.stringify(res));
        alert(this.respuesta.msg);
      });
    }
  }
}
