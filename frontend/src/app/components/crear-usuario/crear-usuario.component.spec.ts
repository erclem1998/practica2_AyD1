import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CrearUsuarioComponent } from './crear-usuario.component';
import { CrearUserService } from '../../services/crear_usuario/crear-user.service';

describe('CrearUsuarioComponent', () => {
  let component: CrearUsuarioComponent;
  let fixture: ComponentFixture<CrearUsuarioComponent>;
  let service: CrearUserService;
  let MockDB;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ CrearUsuarioComponent ],
      providers: [CrearUserService, HttpClient]
    })
    .compileComponents();
    service = TestBed.inject(CrearUserService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('verificar dpi valido', (done) => {
    service.getMockUsers().subscribe((ress: any[]) => {
      MockDB = ress;
      let user = {
        dpi: MockDB[0].dpi,
      }
      expect(component.DPI_Longitud(user.dpi)).not.toContain('invalido');
      done();
    }); 
  });

  it('verificar dpi invalido', (done) => {
    service.getMockUsers().subscribe((ress: any[]) => {
      MockDB = ress;
      let user = {
        dpi: MockDB[1].dpi-3000000,
      }
      expect(component.DPI_Longitud(user.dpi)).toContain('invalido');
      done();
    }); 
  });

  it('verificar mayoria de edad de usuario', (done) => {
    service.getMockUsers().subscribe((ress: any[]) => {
      MockDB = ress;
      let user = {
        edad: MockDB[2].edad,
      }
      expect(component.Edad_Valida(user.edad)).toBeGreaterThanOrEqual(18);
      done();
    }); 
  });

  it('verificar que usuario es menor de edad', (done) => {
    service.getMockUsers().subscribe((ress: any[]) => {
      MockDB = ress;
      let user = {
        edad: MockDB[3].edad-10,
      }
      expect(component.Edad_Valida(user.edad)).not.toBeNaN();
      done();
    }); 
  });
});
