import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { VerReservacionesComponent } from "./components/ver-reservaciones/ver-reservaciones.component";
import { ActualizarReservaComponent } from './components/actualizar-reserva/actualizar-reserva.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
