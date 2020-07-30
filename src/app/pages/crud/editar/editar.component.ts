import { Component, OnInit } from '@angular/core';
import { Estados } from 'src/app/models/estados/estados';
import { EstadosService } from 'src/app/services/estados/estados.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  public estados: Estados[] = [];
  public mostrarModalAlert: boolean = false;
  public mostrarModalConfirmacao: boolean = false;
  public retornoModal: number = 1;

  public formUsuario: FormGroup = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl('', Validators.required),
    cpf: new FormControl(null, Validators.required),
    cep: new FormControl(null, Validators.required),
    logradouro: new FormControl('', Validators.required),
    bairro: new FormControl('', Validators.required),
    localidade: new FormControl('', Validators.required),
    uf: new FormControl('', Validators.required),
  });

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _estadosService: EstadosService,
    private _usuariosService: UsuariosService
  ) { }

  ngOnInit(): void {
    this.carregaEstados();

    let id = this._activatedRoute.snapshot.params['id'];
    if(id != null || id != undefined) {
      this.formUsuario.patchValue({
        id: id
      });
      this.carregaDadosEdicao(id);
    }
  }

  public carregaDadosEdicao(id) {
    this._usuariosService.obter(id).subscribe(
      (sucesso) => this.formUsuario.patchValue(sucesso),
    );
  }

  public carregaEstados() {
    this._estadosService.listar().subscribe(
      (sucesso: Estados[]) => this.estados = sucesso,
      (erro) => console.log(erro)
    );
  }

  public salvarUsuario() {
    if(this.formUsuario.value.id == null) {
      this._usuariosService.salvarUsuario(this.formUsuario.value)
        .subscribe(
          () => {
            this.mostrarModalConfirmacao = false;
            this.mostrarModalAlert = true;
            this.retornoModal = 1;
            this._router.navigate(['/']);
          },
          () => {
            this.mostrarModalConfirmacao = false;
            this.mostrarModalAlert = true;
            this.retornoModal = 0;
          }
        );
    } else {
      this._usuariosService.editarUsuario(this.formUsuario.value, this.formUsuario.value.id)
        .subscribe(
          () => {
            this.mostrarModalConfirmacao = false;
            this.mostrarModalAlert = true;
            this.retornoModal = 1;
          },
          () => {
            this.mostrarModalConfirmacao = false;
            this.mostrarModalAlert = true;
            this.retornoModal = 0;
          }
        );
    }
  }

  public fecharModalRetorno() {
    this.mostrarModalAlert = false;
    if(this.retornoModal == 1) {
      this._router.navigate(['/'])
    }
  }

}
