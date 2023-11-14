import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP } from './../constants'
import { Observable } from 'rxjs';
import { IResponse } from '../interfaces/response.interface';
import { ITipoIdentificacion } from '../interfaces/tipo-documentos.interface';

@Injectable({
  providedIn: 'root',
})
export class TipoIdentificacionService {
  apiUrl: string = APP.ApiEndpoint;
  constructor(private _http: HttpClient) {}

  listar(): Observable<IResponse<ITipoIdentificacion>> {
    return this._http.get<IResponse<ITipoIdentificacion>>(
      `${this.apiUrl}/api/TipoIdentificacion`
    );
  }

  save(data: any): Observable<IResponse<ITipoIdentificacion>> {
    return this._http.post<IResponse<ITipoIdentificacion>>(
      `${this.apiUrl}/api/TipoIdentificacion`,
      data
    );
  }

  update(data: any): Observable<IResponse<ITipoIdentificacion>> {
    return this._http.put<IResponse<ITipoIdentificacion>>(
      `${this.apiUrl}/api/TipoIdentificacion/${data.Id}`,
      data
    );
  }
}

