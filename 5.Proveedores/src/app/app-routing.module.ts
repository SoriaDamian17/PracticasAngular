import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { UploadComponent } from './components/upload/upload.component';
import { ListadoComponent } from './components/proveedores/listado/listado.component';
import { FormularioComponent } from './components/proveedores/formulario/formulario.component';
import { ContratosComponent } from './components/contratos/contratos.component';


const routes: Routes = [
  {
    path: 'Inicio',
    component: InicioComponent
  },
  {
    path: 'Registro',
    component: RegistroComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
