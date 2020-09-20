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
});
