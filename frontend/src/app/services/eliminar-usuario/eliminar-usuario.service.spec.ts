import { TestBed } from '@angular/core/testing';

import { EliminarUsuarioService } from './eliminar-usuario.service';

describe('EliminarUsuarioService', () => {
  let service: EliminarUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EliminarUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("deberia consumir la api para eliminar usuario", function(done) {
    service.deleteFakeUserDB(1).subscribe((res:any)=>{
      expect(res.message).toEqual("Se elimino con exito")
      done()
    })
  })
});
