import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearServicioComponent } from './crear-servicio.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

describe('CrearServicioComponent', () => {
  let component: CrearServicioComponent;
  let fixture: ComponentFixture<CrearServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        MatCardModule
      ],
      providers: [
        {}
      ],
      declarations: [ CrearServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Verficar que exista inicial mayúscula y sea verdadero', function (done) {
    var res = component.VerificarInicialNombreServicio("Masajes en la habitación");
    expect(res).toBeTruthy();
    done();
  });

});
