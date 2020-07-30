import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', loadChildren: () => import('./pages/crud/listar/listar.module').then(m => m.ListarModule) },
      { path: 'adicionar', loadChildren: () => import('./pages/crud/editar/editar.module').then(m => m.EditarModule) },
      { path: 'editar/:id', loadChildren: () => import('./pages/crud/editar/editar.module').then(m => m.EditarModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
