import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuarios } from 'src/app/models/usuarios/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http: HttpClient
  ) { }

  listar(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(`${environment.apiDados}/usuarios`);
  }

  obter(id): Observable<Usuarios> {
    return this.http.get<Usuarios>(`${environment.apiDados}/usuarios/${id}`);
  }

  salvarUsuario(obj): Observable<Usuarios[]> {
    return this.http.post<Usuarios[]>(`${environment.apiDados}/usuarios`, obj);
  }

  editarUsuario(obj, id): Observable<Usuarios[]> {
    return this.http.put<Usuarios[]>(`${environment.apiDados}/usuarios/${id}`, obj);
  }

  deletar(id): Observable<Usuarios[]> {
    return this.http.delete<Usuarios[]>(`${environment.apiDados}/usuarios/${id}`);
  }
}
