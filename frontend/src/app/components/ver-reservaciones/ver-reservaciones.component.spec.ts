import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerReservacionesComponent } from './ver-reservaciones.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Reservacion } from "../../models/reservacion";
import { ReservacionService } from "../../services/reservacion/reservacion.service";

describe('VerReservacionesComponent', () => {
  let component: VerReservacionesComponent;
  let fixture: ComponentFixture<VerReservacionesComponent>;
  var http: HttpClient;
  let service:ReservacionService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerReservacionesComponent ],
      imports: [HttpClientModule,MatButtonModule,MatCardModule,MatSelectModule,BrowserAnimationsModule],
      providers: [ReservacionService, HttpClient]
    })
    .compileComponents();
    service = TestBed.inject(ReservacionService);
  }));

  beforeEach(async() => {
    fixture = TestBed.createComponent(VerReservacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deberia crear una nueva instancia', () => {
    expect(component).toBeTruthy();
  });
  
  it('Deberia devolver la lista de reservaciones de un usuario en especifico y su length debe ser menor o = que el original', async function(done) {
    await service.getReservaciones().subscribe((res: Reservacion[]) => {
      for(let i=0;i<res.length;i++){
        res[i].fecha_entrada=component.obtenerFecha(res[i].fecha_entrada);
        res[i].fecha_salida=component.obtenerFecha(res[i].fecha_salida);
      }
      component.lista_reservaciones = res;
      component.lista_reservacionesTabla = res;
      component.obtenerDpi();
      var dpi=3186715;
      var resultado = component.ObtenerReservacionesUsuario(dpi);
      console.log(resultado.newlength);
      expect(resultado.newlength).toBeLessThanOrEqual(resultado.oldlength);
      done();
    },(error:any)=>{
      console.log(error);
    })
  });

  it('Deberia devolver true', () => {
    expect(component.todos()).not.toBeFalse();
  });

});
