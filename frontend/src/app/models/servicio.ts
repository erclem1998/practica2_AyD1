export class Servicio {
    nombre_servicio: string;
    descripcion:string;
    precio: number;
    capacidad_personas: number; 

  constructor(nombre_servicio: string, descripcion: string, precio: number, capacidad_personas: number) {
    this.nombre_servicio=nombre_servicio
    this.descripcion=descripcion;
    this.precio=precio;
    this.capacidad_personas=capacidad_personas; 
  }
}
