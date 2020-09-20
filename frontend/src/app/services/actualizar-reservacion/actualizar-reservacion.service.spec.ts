import { TestBed } from '@angular/core/testing';
import { Reservacion } from 'src/app/models/reservacion';

import { ActualizarReservacionService } from './actualizar-reservacion.service';
import { HttpClientModule } from '@angular/common/http';

describe('ActualizarReservacionService', () => {
  let service: ActualizarReservacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(ActualizarReservacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deberia consumir la api', (done) => {
    var reservacion = new Reservacion(1,1,"11/12/2020","19/12/2020",2,1,950,3186715)
    service.actualizar(reservacion).subscribe((res: any)=>{
      expect(res.message).toEqual("Se actualizo correctamente la reservacion No. " + reservacion.id_reservacion)
      done()
    })
  })

});
