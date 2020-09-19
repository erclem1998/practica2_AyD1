import { TestBed } from '@angular/core/testing';

import { ReservacionService } from './reservacion.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Reservacion } from "../../models/reservacion";


fdescribe('ReservacionService', () => {
  let service: ReservacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ReservacionService, HttpClient]
    });
    service = TestBed.inject(ReservacionService);
  });

  it('Test funcionamiento correcto del service', (done) => {
    service.getReservaciones().subscribe((res: Reservacion[]) => {
      expect(res.length).toBeGreaterThanOrEqual(0);
      done();
    });
  });
});
