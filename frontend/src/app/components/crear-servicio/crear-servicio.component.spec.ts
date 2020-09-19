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
    expect(res).toEqual(true);
    done();
  });

  it('Verficar inicial mayúscula en el nombre del servicio y sea falso', function (done) {
    var res = component.VerificarInicialMay("masajes en la habitación");
    expect(res).toBeFalsy();
    done();
  });


});
