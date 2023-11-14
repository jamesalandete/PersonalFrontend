import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP } from './../constants'
import { ILogin } from '../models/login.models';
import { IResponse } from '../interfaces/response.interface';
import { IUserResponse } from '../interfaces/user-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  apiUrl: string = APP.ApiEndpoint;
  constructor(private _http: HttpClient) {}

  loginIn(data: ILogin): Observable<IResponse<IUserResponse>> {
    return this._http.post<IResponse<IUserResponse>>(
      `${this.apiUrl}/auth/login`,
      data
    );
  }
}

