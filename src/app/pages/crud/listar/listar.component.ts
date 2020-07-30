import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import { Usuarios } from 'src/app/models/usuarios/usuarios';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  public usuarios: Usuarios[] = [];
  public mostrarModalExclusao: boolean = false;
  public idExclusao: number = null;

  constructor(
    private _usuarioService: UsuariosService
  ) { }

  ngOnInit(): void {
    this.carregarLista();
  }
  
  public carregarLista() {
    this._usuarioService.listar().subscribe(
      (sucesso) => this.usuarios = sucesso
    );
  }

  public abrirModalExclusao(id) {
    this.idExclusao = id;
    this.mostrarModalExclusao = true;
  }

  public excluirUsuario() {
    this._usuarioService.deletar(this.idExclusao).subscribe(
      (sucesso) => {
        this.mostrarModalExclusao = false;
        this.carregarLista()
      }
    )
  }

}
