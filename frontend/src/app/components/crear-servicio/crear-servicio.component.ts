import { Component, OnInit } from '@angular/core';
import { CrearServicioService } from '../../services/crear-servicio.service';

@Component({
  selector: 'app-crear-servicio',
  templateUrl: './crear-servicio.component.html',
  styleUrls: ['./crear-servicio.component.scss']
})
export class CrearServicioComponent implements OnInit {
servicio={
  nombre_servicio: '',
    descripcion:'',
    precio: null,
    capacidad_personas: null
}
  constructor(private crearservicioservice: CrearServicioService,) { }

  ngOnInit(): void {
  
  }

  VerificarInicialMay(Nombre:string):boolean{
      if(Nombre.charCodeAt(0) >=65 && Nombre.charCodeAt(0) <=90){
          return true;
      }else{
        return false;
      }
  }

  AproximarDosDecimales(numero){
    var numeroRegexp;
    numeroRegexp = new RegExp('\\d\\.(\\d){' + 2 + ',}');   
    if (numeroRegexp.test(numero)) {        
        return Number(Number(numero).toFixed(2));
    } else {
      return null;
    }
  }

  VerificarNumeroPalabras(Descripcion:string){
    var TextoDividido = Descripcion.split(" ");
    var numeroPalabras = TextoDividido.length;
    if(numeroPalabras<=20 && numeroPalabras>=5){
        return true;
    }else{
    return false;
    }
  }

  VerificarCaracteres(Nombre:string){
    var i,n=0;
    for(i=0;i<Nombre.length;i++){
      if(!((Nombre.charCodeAt(i)>=65 && Nombre.charCodeAt(i)<=90) || (Nombre.charCodeAt(i)>=97 && Nombre.charCodeAt(i)<=122) || Nombre.charCodeAt(i)==32)){ 
        return false;
      }else{
        n++;
      }
    }
    return true;
  }
  
  ObtenerIvaPrecio(Pre:number){
    Pre= Pre+Pre*0.12;
    return Pre;
  }

  ObtenerSoloIva(Pre:number){
    Pre= Pre*0.12;
    return Pre;
  }



  CREAR(Nom:string,Desc:string,Cap:string,Pre:string){
    this.servicio.nombre_servicio=Nom;this.servicio.descripcion=Desc;this.servicio.capacidad_personas=Cap;this.servicio.precio=Pre;
    console.log(Nom);
    if(this.VerificarInicialMay(Nom) && this.VerificarInicialMay(Desc)&&this.VerificarNumeroPalabras(Desc) && this.VerificarCaracteres(Desc)){
      console.log('indica que si funciono1');    
      var pre2:Number=this.AproximarDosDecimales(Pre);
          this.crearservicioservice.CrearServicio(this.servicio).subscribe((res:any) => {
            if (res.statusCode == 200) {
              console.log('indica que si funciono');
            } else {
              
            }
          });
          return true;
    }else{
      return false;
    }
  }
}
