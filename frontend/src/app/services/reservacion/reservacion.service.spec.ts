import { TestBed } from '@angular/core/testing';

import { ReservacionService } from './reservacion.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Reservacion } from "../../models/reservacion";


fdescribe('ReservacionService', () => {
  let service: ReservacionService;
  var http: HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ReservacionService, HttpClient]
    });
    service = TestBed.inject(ReservacionService);
  });

  it('Deberia devolver una lista de tamaño >= 0', (done) => {
    service.getReservaciones().subscribe((res: Reservacion[]) => {
      expect(res.length).toBeGreaterThanOrEqual(0);
      done();
    });
  });

  it('Deberia devolver affectedRows = 0', (done) => {
    service.Eliminar(12).subscribe((res: any) => {
      expect(res.affectedRows).toEqual(0);
      done();
    });
  });

  it('Deberia devolver true', (done) => {
    http.get('assets/fakedb/fakereservation.json')
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log('Error al obtener la configuracion: ' + error);
      });
  });

});
