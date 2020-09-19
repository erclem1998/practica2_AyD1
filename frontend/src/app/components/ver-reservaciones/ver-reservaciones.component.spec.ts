import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerReservacionesComponent } from './ver-reservaciones.component';

fdescribe('VerReservacionesComponent', () => {
  let component: VerReservacionesComponent;
  let fixture: ComponentFixture<VerReservacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerReservacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerReservacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deberia crear una nueva instancia', () => {
    expect(component).toBeTruthy();
  });
  
  it('Deberia devolver la lista de reservaciones de un usuario en especifico', () => {
    var dpi=3186715;
    var resultado = component.ObtenerReservacionesUsuario(dpi);
    expect(resultado.newlength).toBeLessThanOrEqual(resultado.oldlength);
  });
  

});
