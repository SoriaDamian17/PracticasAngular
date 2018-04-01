import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
/** Componets */
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { ListadoComponent } from './components/proveedores/listado/listado.component';
import { FormularioComponent } from './components/proveedores/formulario/formulario.component';
import { UploadComponent } from './components/upload/upload.component';
import { ContratosComponent } from './components/contratos/contratos.component';
/** servicios */
import { PresupuestoService } from './service/presupuesto.service';
import { LoadfileService } from './service/loadfile.service';
import { AuthenticationsService } from './service/authentications.service';
import { GuardService } from './service/guard.service';
/** Config */
import { CONFIG } from './config/firebase.config';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RegistroComponent,
    LoginComponent,
    ListadoComponent,
    FormularioComponent,
    UploadComponent,
    ContratosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
