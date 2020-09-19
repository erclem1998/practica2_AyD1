import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user/user.model';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent implements OnInit {
  usuario: User;

  constructor() { }

  ngOnInit(): void {
  }

  Registrar(){}
}
