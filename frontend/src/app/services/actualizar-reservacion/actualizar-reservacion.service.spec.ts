import { TestBed } from '@angular/core/testing';
import { Reservacion } from 'src/app/models/reservacion';

import { ActualizarReservacionService } from './actualizar-reservacion.service';

describe('ActualizarReservacionService', () => {
  let service: ActualizarReservacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActualizarReservacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deberia consumir la api', function(done) {
    var reservacion = new Reservacion(1,1,"1s/12/2020","13/12/2020",2,1,650,3186715)
    service.actualizar(reservacion)
    done()
  })

});
