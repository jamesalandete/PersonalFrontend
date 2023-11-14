import { createSelector } from '@ngrx/store'
import { AppState } from '../app.state'
import { TipoIdentificacionState } from './tipo-identificacion.state';

export const selectTipoIdentificacion = (state : AppState) => state.tipoIdentLoad;

export const selectLoadTipoIdentificacions = createSelector(
  selectTipoIdentificacion,
  (list : TipoIdentificacionState ) => list

)
