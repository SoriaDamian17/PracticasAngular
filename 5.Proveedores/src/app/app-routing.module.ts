import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
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
=======
import { ContratosComponent } from './components/contratos/contratos.component';
import { LoginComponent } from './components/login/login.component';
import { FormularioComponent } from './components/proveedores/formulario/formulario.component';
import { ListadoComponent } from './components/proveedores/listado/listado.component';

const routes: Routes = [
  {
    path:'Ingreso',
    component: LoginComponent
  },
  {
    path:'Proveedores',
    component: ListadoComponent
  },
  {
    path:'Proveedores/Alta',
    component: FormularioComponent
  },
  {
    path:'Contratos',
    component: ContratosComponent
  }
>>>>>>> aa4285b7a562e7be85a9eb732fea01ee89a9424f
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
