import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CrearUserService } from './crear-user.service';

describe('CrearUserService', () => {
  let service: CrearUserService;

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
});
