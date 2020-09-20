import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarUsuarioComponent } from './eliminar-usuario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

describe('EliminarUsuarioComponent', () => {
  let component: EliminarUsuarioComponent;
  let fixture: ComponentFixture<EliminarUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarUsuarioComponent ],
      imports: [
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia ejecutarse la funcion eliminar para Usuario', async function(done){
    var s = component.eliminar(4016724)
    expect(s).not.toBeNull()
    done()
  })
});
