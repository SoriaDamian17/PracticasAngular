import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
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

=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs'
/** Firebase */
import { FirebaseModule } from './module/firebase/firebase.module';
/** Material */
import { MaterialModule } from './module/material.module';
/** Routing */
import { AppRoutingModule } from './app-routing.module';
/** Components */
import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { ContratosComponent } from './components/contratos/contratos.component';
import { ListadoComponent } from './components/proveedores/listado/listado.component';
import { FormularioComponent } from './components/proveedores/formulario/formulario.component';
import { MenutabComponent } from './components/share/menutab/menutab.component';
import { FooterComponent } from './components/share/footer/footer.component';
>>>>>>> aa4285b7a562e7be85a9eb732fea01ee89a9424f

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
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
=======
    RegistroComponent,
    LoginComponent,
    ContratosComponent,
    ListadoComponent,
    FormularioComponent,
    MenutabComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTabsModule,
    MaterialModule,
    FirebaseModule
>>>>>>> aa4285b7a562e7be85a9eb732fea01ee89a9424f
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
