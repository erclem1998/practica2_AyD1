import { TestBed } from '@angular/core/testing';

import { ReservacionService } from './reservacion.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Reservacion } from "../../models/reservacion";


describe('ReservacionService', () => {
  let service: ReservacionService;
  var http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ReservacionService, HttpClient]
    });
    service = TestBed.inject(ReservacionService);
  });

  it('Test Post Reservacion (MOCK)', (done) => {
    service.getFakeReservationDB().subscribe((res: any[]) => {
      var mockdb = res;
      var fakepostreservation = function (reservation): any {
        mockdb.push(reservation);
        return { statusCode: 200 };
      };
      spyOn(service, 'postreservation').and.callFake(fakepostreservation);
      var restest: any = service.postreservation(new Reservacion(11, 4, '2020-09-21T06:00:00.000Z', '2020-09-26T06:00:00.000Z', 4, 5, 3500.75, 4716338));
      expect(restest.statusCode).toBe(200);
      done();
    });
  });

});
