import { createAction, props } from '@ngrx/store';
import { ILogin } from './../../models/login.models'


export const loginAuth = createAction(
  '[Login Page] Auth user', props<ILogin>()
);
export const loginGet = createAction('[Login Page] get user data success',
  props<{ user: any }>());

export const loginError = createAction(
  '[Login Page] Auth user error'
);
export const loginGetStore = createAction(
  '[Login Page] Auth get store user', props<ILogin>()
);
export const loginlogout = createAction('[Login Page] Logout user');

