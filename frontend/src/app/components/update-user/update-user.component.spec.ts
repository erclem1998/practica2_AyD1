import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserComponent } from './update-user.component';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('UpdateUserComponent', () => {
  let component: UpdateUserComponent;
  let fixture: ComponentFixture<UpdateUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [FormBuilder, HttpClient],
      declarations: [UpdateUserComponent],
      imports: [ReactiveFormsModule, HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El largo del username deberia ser mayor o igual a 5', (done) => {
    expect(component.test1('uSeRnameL3g3nd')).toBeTruthy();
    done();
  });

  it('El largo del username deberia ser menor o igual a 5', (done) => {
    expect(component.test1('user')).toBeFalsy();
    done();
  });

  it('El username debe tener solo numeros y caracteres', (done) => {
    expect(component.test2('uSeRnameL3g3nd')).toEqual(true);
    done();
  });

  it('El username no debe tener solo numeros y caracteres', (done) => {
    expect(component.test2('uSeRn@meL3g3nd')).not.toEqual(true);
    done();
  });

  it('El password deberia tener como minimo una mayuscula', (done) => {
    expect(component.test3('Aasdf1')).toBeGreaterThan(0);
    done();
  });

  it('Prueba para actualizar usuario', () => {
    component.updateForm.setValue({ dpi: 2298821, username: "testuhcorona", passwd: "testpassword", correo: "", edad: "" });
    expect(component.onSubmit()).toBeTruthy();
  });

});
