import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarRoutingModule } from './listar-routing.module';
import { ListarComponent } from './listar.component';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';


@NgModule({
  declarations: [ListarComponent],
  imports: [
    CommonModule,
    ListarRoutingModule
  ],
  providers: [
    UsuariosService
  ]
})
export class ListarModule { }
