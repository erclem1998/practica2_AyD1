import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let MockDB;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    MockDB = [{username: 'uhcorona',passwd: 'uhcorona'},{username: 'erick1234',passwd: 'erick123'},{username: '',passwd: 'carlos456'},{username: 'henryg123',passwd: ''}];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('verificar username no sea vacio', () => {
    expect(component.UsernameVacio(MockDB[0].username)).toBeFalse();
  });

  it('verificar username sea vacio', () => {
    expect(component.UsernameVacio(MockDB[2].username)).toBeTrue();
  });
});
