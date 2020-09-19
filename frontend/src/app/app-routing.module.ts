import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActualizarReservaComponent } from './components/actualizar-reserva/actualizar-reserva.component';

const routes: Routes = [
  {
    path: 'actualizar-reservacion',
    component: ActualizarReservaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
