import { ActionReducerMap } from "@ngrx/store";
import { LoginLoadReducer, LoginState } from "./login/login.reducers";
import { PersonLoadReducer } from "./person/person.reducers";
import { PersonState } from "./person/person.state";
import { TipoIdentificacionState } from "./tipo-identificacion/tipo-identificacion.state";
import { TipoIdentificacionLoadReducer } from "./tipo-identificacion/tipo-identificacion.reducers";

// AQUI IMPORTAMOS TODOS LOS ESTADOS DE LA APLICACION
export interface AppState {
  loginLoad: LoginState;
  personLoad: PersonState;
  tipoIdentLoad: TipoIdentificacionState;
}

// IMPORTAMOS LOS REDUCER ENCARGADO DE GESTIONAR LAS ACCIONES PARA PODER IMPORTAR EN NUESTRO MODULO PRINICPAL
export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  loginLoad: LoginLoadReducer,
  personLoad: PersonLoadReducer,
  tipoIdentLoad: TipoIdentificacionLoadReducer
};
