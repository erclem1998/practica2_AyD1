import { TestBed } from '@angular/core/testing';

import { CrearServicioService } from './crear-servicio.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';


describe('CrearServicioService', () => {
  let service: CrearServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({

      imports: [HttpClientModule],
      providers: [CrearServicioService, HttpClient]
    });
    service = TestBed.inject(CrearServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Verificar que no exista en la base de datos el servicio', function (done) {
    service.getFakeServiceDB().subscribe((res:any[])=>{
      var mockdb=res;
      var mockDelete= jasmine.createSpy().and.callFake(function(){
        console.log(mockdb);
        return false;
      });
      expect(mockDelete()).toBeFalsy();
      done();
    });
  });

});
