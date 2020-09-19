import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearServicioComponent } from './crear-servicio.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

describe('CrearServicioComponent', () => {
  let component: CrearServicioComponent;
  let fixture: ComponentFixture<CrearServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        MatCardModule
      ],
      
      declarations: [ CrearServicioComponent ]
    })
    .compileComponents();
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


});
