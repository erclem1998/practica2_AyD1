import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EliminarUsuarioComponent } from './components/eliminar-usuario/eliminar-usuario.component';

const routes: Routes = [
  {
    path: 'eliminar-usuario',
    component: EliminarUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
