import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estados } from 'src/app/models/estados/estados';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  constructor(
    private http: HttpClient
  ) { }

  listar(): Observable<Estados[]> {
    return this.http.get<Estados[]>(`${environment.apiIbge}/localidades/estados`);
  }

}
