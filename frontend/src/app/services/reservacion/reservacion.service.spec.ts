import { TestBed } from '@angular/core/testing';

import { ReservacionService } from './reservacion.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Reservacion } from "../../models/reservacion";


fdescribe('ReservacionService', () => {
  let service: ReservacionService;
  var http: HttpClient;
  var mockDelete= jasmine.createSpy().and.callFake(function(id_reservacion,dbfalsa){
    var flag=false;
    for(let i=0;i<dbfalsa.length;i++){
      if(dbfalsa[i].id_reservacion==id_reservacion){
        dbfalsa.splice(i,1);
        return 200;
      }
    }
    return 404;
  });
  
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

  it('Deberia devolver un 200 de que si lo elimino', (done) => {
    service.getFakeReservationDB().subscribe((res: any[]) => {
      var mockdb=res;
      expect(mockDelete(8,mockdb)).toBe(200);
      done();
    });
  });

  it('Deberia devolver un estado 404', (done) => {
    service.getFakeReservationDB().subscribe((res: any[]) => {
      var mockdb=res;
      expect(mockDelete(15,mockdb)).not.toBe(200);
      done();
    });
  });

});
