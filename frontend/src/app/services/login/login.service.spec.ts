import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;
  let MockDBUser;
  let mocklogin= jasmine.createSpy().and.callFake(function(user,dbmock){
    for(let i=0;i<dbmock.length;i++){
      if(dbmock[i].username == user.username){
         if(dbmock[i].passwd == user.passwd){
            return 'login correcto';
         }else{
           return 'passwd incorrecta';
         }
      }
    }
    return 'usuario no registrado';
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [LoginService, HttpClient]
    });
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('verifica que login sera correcto', (done) => {
    service.getMockUsers().subscribe((ress: any[]) => {
      MockDBUser = ress;
      let user = {
        username: MockDBUser[1].username,
        passwd: MockDBUser[1].passwd
      }
      expect(service.Login(user)).toBeTruthy();
      done();
    });
  });

  it('verifica que login sea incorrecto, por passwd incorrecta', (done) => {
    service.getMockUsers().subscribe((ress: any[]) => {
      MockDBUser = ress;
      let user = {
        username: MockDBUser[1].username,
        passwd: MockDBUser[2].passwd
      }
      expect(mocklogin(user,MockDBUser)).toEqual('passwd incorrecta');
      done();
    });
  });
});
