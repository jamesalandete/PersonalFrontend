import { createSelector } from '@ngrx/store'
import { AppState } from '../app.state'
import { LoginState } from './login.reducers';

export const selectLogin = (state : AppState) => state.loginLoad;

export const selectLoadDrivers = createSelector(
  selectLogin,
  (dataUser : LoginState ) => dataUser
)
