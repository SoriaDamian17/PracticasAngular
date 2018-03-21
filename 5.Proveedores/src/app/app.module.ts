import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
