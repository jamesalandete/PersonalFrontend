import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as actions from './login.actions';
import { LoginService } from './../../services/login.service'
import { IUserResponse } from 'src/app/interfaces/user-response.interface';
import { IResponse } from 'src/app/interfaces/response.interface';
import { ILogin } from 'src/app/models/login.models';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loginAuth),
      switchMap((action: ILogin) => this.loginService.loginIn(action).pipe(
        map((user: IResponse<IUserResponse>) => actions.loginGet({ user })),
        catchError(() => of(actions.loginError()))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private loginService: LoginService
  ) { }
}