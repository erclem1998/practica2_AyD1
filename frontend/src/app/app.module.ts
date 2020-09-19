import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EliminarUsuarioComponent } from './components/eliminar-usuario/eliminar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    EliminarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
