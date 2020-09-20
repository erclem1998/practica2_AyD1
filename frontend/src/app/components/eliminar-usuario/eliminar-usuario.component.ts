import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EliminarUsuarioService } from '../../services/eliminar-usuario/eliminar-usuario.service'

@Component({
  selector: 'app-eliminar-usuario',
  templateUrl: './eliminar-usuario.component.html',
  styleUrls: ['./eliminar-usuario.component.scss']
})
export class EliminarUsuarioComponent implements OnInit {

  FG = new FormGroup({
    dpi: new FormControl('', [
      Validators.required
    ]),
  });

  constructor(private userService: EliminarUsuarioService) { }

  ngOnInit(): void {
  }

  async eliminar(dpi: number): Promise<any> {
    
    await this.userService.eliminar(dpi).subscribe(res =>{}, err => {
      alert(err.message)
      return false
    })
  }

  get dpiFC() {
    return this.FG.get('dpi');
  }

}
