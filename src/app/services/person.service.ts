import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP } from './../constants'
import { Observable } from 'rxjs';
import { IResponse } from '../interfaces/response.interface';
import { IPersonas } from '../interfaces/personas.interface';

@Injectable({
  providedIn: 'root',
})
export class PersonsService {
  apiUrl: string = APP.ApiEndpoint;
  constructor(private _http: HttpClient) {}

  listar(): Observable<IResponse<IPersonas>> {
    return this._http.get<IResponse<IPersonas>>(`${this.apiUrl}/api/Persona`);
  }

  save(data: any): Observable<IResponse<IPersonas>> {
    return this._http.post<IResponse<IPersonas>>(
      `${this.apiUrl}/api/Persona`,
      data
    );
  }

  update(data: any): Observable<IResponse<IPersonas>> {
    return this._http.put<IResponse<IPersonas>>(
      `${this.apiUrl}/api/Persona/${data.id}`,
      data
    );
  }
}

