import { TestBed } from '@angular/core/testing';

import { EliminarUsuarioService } from './eliminar-usuario.service';
import { HttpClientModule } from '@angular/common/http';

describe('EliminarUsuarioService', () => {
  let service: EliminarUsuarioService;

  var mockDelete= jasmine.createSpy().and.callFake(function(dpi,dbfalsa){
    var flag=false;
    for(let i=0;i<dbfalsa.length;i++){
      if(dbfalsa[i].dpi==dpi){
        dbfalsa.splice(i,1);
        return {message: "Se elimino con exito"};
      }
    }
    return {message: "No se pudo eliminar"};
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(EliminarUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("deberia consumir la api para eliminar usuario", function(done) {
    service.deleteFakeUserDB(2298821).subscribe((res:any)=>{
      expect(mockDelete(2298821,res).message).toEqual("Se elimino con exito")
      done()
    })
  })

  it("deberia retornar mensaje de error al consumir api real", function(done) {
    service.eliminar(1).subscribe((res:any)=>{
      expect(res.rows).toBeGreaterThanOrEqual(0)
      done()
    })
  })
});
