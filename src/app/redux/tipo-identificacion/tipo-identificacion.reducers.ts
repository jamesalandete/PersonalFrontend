import { Action, createReducer, on, State } from "@ngrx/store";
import * as actions from './tipo-identificacion.actions';
import { TipoIdentificacionState } from "./tipo-identificacion.state";

export const initStateTipoIdentificacion : TipoIdentificacionState = {
  loading : false,
  list : [] ,
  form    : {},
  save : false
}

export const TipoIdentificacionLoadReducer = createReducer(
  initStateTipoIdentificacion,
  on(actions.loadTipoIdentificacions, (state) => {
    return { ...state,loading : true, save : false }
  }),
  on(actions.loadTipoIdentificacionsSuccess, (state ,{list}) => {
    return { ...state,loading : false, list : list, save : false }
  }),
  on(actions.loadTipoIdentificacionsForm, (state , TipoIdentificacionModel) => {
    return { ...state,loading : false,  form : TipoIdentificacionModel, save : false }
  }),
  on(actions.saveTipoIdentificacionsForm, (state , TipoIdentificacionModel) => {
    return { ...state,loading : false,  form : TipoIdentificacionModel , save : false}
  }),
  on(actions.saveTipoIdentificacionsFormSuccess, (state , TipoIdentificacionModel) => {
    return { ...state,loading : false, save : true}
  }),
);
