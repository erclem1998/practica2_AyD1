import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerReservacionesComponent } from "./components/ver-reservaciones/ver-reservaciones.component";

const routes: Routes = [
  {
    path: 'ver_reservaciones',
    component: VerReservacionesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
