import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LoginService } from '../../services/login/login.service';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: LoginService;
  let MockDB;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [HttpClientModule],
      providers: [LoginService, HttpClient]
    })
    .compileComponents();
    service = TestBed.inject(LoginService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('verificar username no sea vacio', (done) => {
    service.getMockUsers().subscribe((ress: any[]) => {
      MockDB = ress;
      let user = {
        username: MockDB[0].username,
        passwd: MockDB[0].passwd
      }
      expect(component.AtributoVacio(user.username)).toBeFalse();
      done();
    });
  });

  it('verificar username sea vacio', (done) => {
    service.getMockUsers().subscribe((ress: any[]) => {
      MockDB = ress;
      let user = {
        username: '',
        passwd: MockDB[1].passwd
      }
      expect(component.AtributoVacio(user.username)).toBeTrue();
      done();
    });
  });

  it('verificar password no sea vacio', (done) => {
    service.getMockUsers().subscribe((ress: any[]) => {
      MockDB = ress;
      let user = {
        username: MockDB[1].username,
        passwd: MockDB[1].passwd
      }
      expect(component.AtributoVacio(user.passwd)).toBeFalse();
      done();
    }); 
  });

  it('verificar password sea vacio', (done) => {
    service.getMockUsers().subscribe((ress: any[]) => {
      MockDB = ress;
      let user = {
        username: MockDB[3].username,
        passwd: ''
      }
      expect(component.AtributoVacio(user.passwd)).toBeTrue();
      done();
    }); 
  });
});
