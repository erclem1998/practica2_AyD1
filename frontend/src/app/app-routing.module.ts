import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CrearServicioComponent} from './components/crear-servicio/crear-servicio.component';

const routes: Routes = [
  {
    path: 'crear_servicio',
    component: CrearServicioComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
