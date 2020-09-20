import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CrearUserService } from './crear-user.service';

describe('CrearUserService', () => {
  let service: CrearUserService;
  let MockDBUser;
  let mockregistro = jasmine.createSpy().and.callFake(function(user,dbmock){
    let encontrado = false;
    for(let i=0;i<dbmock.length;i++){
      if(dbmock[i].dpi == user.dpi){
        encontrado = true;
      }
    }
    if(!encontrado){
      return 'usuario registrado con exito';
    }else{
      return 'usuario ya registrado';
    }
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [CrearUserService, HttpClient]
    });
    service = TestBed.inject(CrearUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('verificar registro exitoso', (done) => {
    service.getMockUsers().subscribe((ress: any[]) => {
      MockDBUser = ress;
      let user = {
        dpi: MockDBUser[4].dpi+5,
        username: MockDBUser[4].username+'123',
        passwd: MockDBUser[4].passwd,
        correo: MockDBUser[4].correo,
        edad: MockDBUser[4].edad
      }
      expect(mockregistro(user,MockDBUser)).toBe('usuario registrado con exito');
      done();
    }); 
  });
});
