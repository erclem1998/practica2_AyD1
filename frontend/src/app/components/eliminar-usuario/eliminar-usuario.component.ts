import { Component, OnInit } from '@angular/core';
import { EliminarUsuarioService } from '../../services/eliminar-usuario/eliminar-usuario.service'

@Component({
  selector: 'app-eliminar-usuario',
  templateUrl: './eliminar-usuario.component.html',
  styleUrls: ['./eliminar-usuario.component.scss']
})
export class EliminarUsuarioComponent implements OnInit {

  constructor(private userService: EliminarUsuarioService) { }

  ngOnInit(): void {
  }

  async eliminar(dpi: number): Promise<any> {
    
    await this.userService.deleteFakeUserDB(dpi).subscribe((res: any) => {
      alert(res.message)
      return true
    })
  }

}
