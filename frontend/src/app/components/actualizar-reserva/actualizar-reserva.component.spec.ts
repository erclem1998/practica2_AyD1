import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarReservaComponent } from './actualizar-reserva.component';

describe('ActualizarReservaComponent', () => {
  let component: ActualizarReservaComponent;
  let fixture: ComponentFixture<ActualizarReservaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarReservaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia retornar true para un numero de habitacion entero mayor que cero', function (done) {
    var res = component.validarEnteroPositivoMayorA(2, 1)
    expect(res).toBeTruthy()
    done()
  });

  it('deberia retornar false para un numero de habitacion entero menor que cero y limite mayor que cero', function (done) {
    var res = component.validarEnteroPositivoMayorA(-1, 1)
    expect(res).toBeFalse()
    done()
  });

  it('deberia retornar false para un numero de habitacion entero mayor que cero y limite menor que cero', function (done) {
    var res = component.validarEnteroPositivoMayorA(2, -1)
    expect(res).toBeFalsy()
    done()
  });

  it('deberia retornar false para un numero de habitacion no entero', function (done) {
    var res = component.validarEnteroPositivoMayorA(2.4, 1)
    expect(res).toEqual(false)
    done()
  });

  it('deberia retornar false para un limite no entero', function (done) {
    var res = component.validarEnteroPositivoMayorA(2, 1.5)
    expect(res).toEqual(false)
    done()
  });

});
