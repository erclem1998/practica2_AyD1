import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { VerReservacionesComponent } from "./components/ver-reservaciones/ver-reservaciones.component";
import { ActualizarReservaComponent } from './components/actualizar-reserva/actualizar-reserva.component';
import { EliminarUsuarioComponent } from './components/eliminar-usuario/eliminar-usuario.component';
import { LoginComponent } from '../app/components/login/login.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';

const routes: Routes = [
  {
    path: 'update_user',
    component: UpdateUserComponent
  },
  {
    path: 'ver_reservaciones',
    component: VerReservacionesComponent,
  },
  {
    path: 'actualizar-reservacion',
    component: ActualizarReservaComponent
  },
  {
    path: 'eliminar-usuario',
    component: EliminarUsuarioComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'crear_user',
    component: CrearUsuarioComponent
  },
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
