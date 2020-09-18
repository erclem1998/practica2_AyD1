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

});
