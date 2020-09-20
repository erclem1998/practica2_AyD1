import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerReservacionesComponent } from './ver-reservaciones.component';
import { ReservacionService } from '../../services/reservacion/reservacion.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

fdescribe('VerReservacionesComponent', () => {
  let component: VerReservacionesComponent;
  let fixture: ComponentFixture<VerReservacionesComponent>;
  let service: ReservacionService;
  var http: HttpClient;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerReservacionesComponent ],
      imports: [HttpClientModule,MatButtonModule,MatCardModule,MatSelectModule,BrowserAnimationsModule],
      providers: [ReservacionService, HttpClient]
    })
    .compileComponents();
    service = TestBed.inject(ReservacionService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerReservacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('Deberia crear una nueva instancia', () => {
    expect(component).toBeTruthy();
  });*/
  
  it('Deberia devolver la lista de reservaciones de un usuario en especifico y su length debe ser menor o = que el original', async function(done) {
    var dpi=3186715;
    console.log(component.obtenerR());
    var resultado = component.ObtenerReservacionesUsuario(dpi);
    console.log(component.lista_reservaciones);
    expect(resultado.newlength).toBeLessThanOrEqual(resultado.oldlength);
    done();
  });
  

});
