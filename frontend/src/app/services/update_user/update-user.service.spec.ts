import { TestBed } from '@angular/core/testing';

import { UpdateUserService } from './update-user.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user/user.model';


describe('Tests Update Service', () => {
  let service: UpdateUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [UpdateUserService, HttpClient]
    });
    service = TestBed.inject(UpdateUserService);
  });

  it('Test funcionamiento correcto del service', (done) => {
    service.updateuser(new User(2298821, 'uhcoronatestangular', undefined, undefined, undefined)).subscribe((res: any) => {
      expect(res.affectedRows).toBe(1);
      done();
    });
  });

});
