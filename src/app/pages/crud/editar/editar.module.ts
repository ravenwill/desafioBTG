import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarRoutingModule } from './editar-routing.module';
import { EditarComponent } from './editar.component';
import { EstadosService } from 'src/app/services/estados/estados.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask'


@NgModule({
  declarations: [
    EditarComponent
  ],
  imports: [
    CommonModule,
    EditarRoutingModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ], 
  providers: [
    EstadosService
  ]
})
export class EditarModule { }
