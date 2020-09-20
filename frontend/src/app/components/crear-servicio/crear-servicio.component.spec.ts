import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearServicioComponent } from './crear-servicio.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { CrearServicioService } from '../../services/crear-servicio.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('CrearServicioComponent', () => {
  let component: CrearServicioComponent;
  let fixture: ComponentFixture<CrearServicioComponent>;
  let service: CrearServicioService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        MatCardModule,
        HttpClientModule

      ],
      providers: [CrearServicioService, HttpClient],
      declarations: [ CrearServicioComponent ]
    })
    .compileComponents();
    service = TestBed.inject(CrearServicioService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Verficar que exista inicial mayúscula en el nombre del servicio y sea verdadero', function (done) {
    var res = component.VerificarInicialMay("Masajes en la habitación");
    expect(res).toBeTruthy();
    done();
  });

  it('Verficar que exista inicial mayúscula en la descripcion y sea verdadero', function (done) {
    var res = component.VerificarInicialMay("Un especialista se dirigirá a su habitación a una hora solicitada para realizarle masaje en las áreas solicitadas");
    expect(res).toBe(true);
    done();
  });

  it('Verficar inicial mayúscula en el nombre del servicio y sea falso', function (done) {
    var res = component.VerificarInicialMay("masajes en la habitación");
    expect(res).toBeFalsy();
    done();
  });

  it('Verficar la aproximación aumente el segundo decimal por ser el tercero mayor igual a 5', function (done) {
    var res = component.AproximarDosDecimales(112.356);
    expect(res).toBeGreaterThan(112.35);
    done();
  });

  it('Verficar la aproximación que no aumente el segundo decimal por ser el tercero menor a 5', function (done) {
    var res = component.AproximarDosDecimales(112.354);
    expect(res).toBeLessThan(112.36);
    done();
  });

  it('Verficar la aproximación no se realice teniendo null sabiendo que no era decimal', function (done) {
    var res = component.AproximarDosDecimales(121);
    expect(res).toBeNull();
    done();
  });

  it('Verficar que descripcion entre en rango de 5 y 20 palabras esperando true', function (done) {
    var res = component.VerificarNumeroPalabras("Un especialista se dirigirá a su habitación a una hora solicitada para realizarle masaje en las áreas solicitadas");
    expect(res).toBe(true);
    done();
  });

  it('Verficar que descripcion entre en rango de 5 y 20 palabras esperando true', function (done) {
    var res = component.VerificarNumeroPalabras("Un especialista");
    expect(res).toBe(false);
    done();
  });

  it('Verficar caracteres válidos esperando sea true', function (done) {
    var res = component.VerificarCaracteres("Un especialista");
    expect(res).toBeTruthy();
    done();
  });

  it('Verficar caracteres válidos esperando sea false', function (done) {
    var res = component.VerificarCaracteres("Un@especialista");
    expect(res).toBeFalsy();
    done();
  });

  it('Verficar si devuelve el precio con iva', function (done) {
    var res = component.ObtenerIvaPrecio(100);
    expect(res).toEqual(112);
    done();
  });

  it('Verficar si que al crear el servicio devuelva Null', function (done) {
    var servicio={
      nombre_servicio: 'D',
        descripcion:'mmmmmm',
        precio: 9,
        capacidad_personas: 9
    }
    expect(service.CrearServicio(servicio)).toEqual(null);
    done();
  });

  it('Verficar si devuelve solo iva', function (done) {
    var res = component.ObtenerSoloIva(100);
    expect(res).toEqual(12);
    done();
  });

  it('Verficar que las funciones juntas den el resultado correcto', function (done) {
    var res = component.CREAR('D','Esto Es una prueba realemente per@','123','122');
    expect(res).toBeFalsy();
    done();
  });
  

  it('Verificar que no exista en la base de datos el servicio y agregar', function (done) {
    service.getFakeServiceDB().subscribe((res:any[])=>{
      var mockdb=res;var i:number;
      var mockPost= jasmine.createSpy().and.callFake(function(nombre:string){
      
        for( i=0;i<mockdb.length;i++){
          if(mockdb[i].nombre_servicio==nombre){
            return true;
          }
        }
        return false;
      });
      expect(mockPost('Desayunou')).toEqual(false);
      done();
    });
  });


});
