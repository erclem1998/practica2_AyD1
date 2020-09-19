import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';

const routes: Routes = [
  {
    path: 'update_user',
    component: UpdateUserComponent
  },
  {
    path: 'crear_user',
    component: CrearUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
