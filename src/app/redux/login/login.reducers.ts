import { Action, createReducer, on, State } from "@ngrx/store";
import * as actions from './login.actions';
import { IUserResponse } from "src/app/interfaces/user-response.interface";


export interface LoginState {
  auth : boolean,
  dataUser: IUserResponse
}
export const initStateLogin : LoginState = {
  auth : false,
  dataUser : { usuario: '', id: 0, token: '' }
}



const dataUser : any = localStorage.getItem('dataUser')

export const LoginLoadReducer = createReducer(
  initStateLogin,
  on(actions.loginAuth, (state) => state),
  on(actions.loginGet, (state ,{ user }) => {
    return { ...state, dataUser: user.result[0], auth: true };
  }),
  on(actions.loginGetStore, (state ,user) => {
    return { ...state, dataUser : dataUser }
  }),
  on(actions.loginError,(state) => {
    return { ...state,auth : false }
  }),
  on(actions.loginlogout,(state) => {
    return { ...state,auth : false, dataUser : { usuario: '', id: 0, token: '' } }
  }),
);