export class Reservacion {
    id_reservacion: number
    num_habitaciones: number
    fecha_entrada:string
    fecha_salida:string
    num_adultos:number
    num_ninios:number
    total:number
    dpi:number

    constructor(_id_reservacion:number, _num_habitaciones:number, _fecha_entrada:string, _fecha_salida:string, 
        _num_adultos:number, _num_ninios:number,_total:number, _dpi:number){
            this.id_reservacion=_id_reservacion;
            this.num_habitaciones=_num_habitaciones;
            this.fecha_entrada=_fecha_entrada;
            this.fecha_salida=_fecha_salida;
            this.num_adultos=_num_adultos;
            this.num_ninios=_num_ninios;
            this.total=_total;
            this.dpi=_dpi;
    }
}
