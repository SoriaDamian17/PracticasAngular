import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
