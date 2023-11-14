import { createAction, props } from '@ngrx/store';
import { ITipoIdentificacion } from 'src/app/interfaces/tipo-documentos.interface';

export const loadTipoIdentificacions = createAction('[TipoIdentificacion List] Load TipoIdentificacions');

export const loadTipoIdentificacionsSuccess = createAction('[TipoIdentificacion List] Load TipoIdentificacions Success', props<{list : ITipoIdentificacion[]}>());

export const loadTipoIdentificacionsError = createAction('[TipoIdentificacion List] Load TipoIdentificacions Error');

export const loadTipoIdentificacionsForm = createAction('[TipoIdentificacion Form] Load TipoIdentificacions Form', props<{tipoIdentificacions : ITipoIdentificacion}>());;

export const saveTipoIdentificacionsForm = createAction('[TipoIdentificacion Form] Save TipoIdentificacions Form', props<{tipoIdentificacions : ITipoIdentificacion[]}>());

export const updateTipoIdentificacionsForm = createAction('[TipoIdentificacion Form]  Update TipoIdentificacions Form', props<{tipoIdentificacions : ITipoIdentificacion[]}>());

export const saveTipoIdentificacionsFormSuccess = createAction('[TipoIdentificacion Form] Save TipoIdentificacions Form Success', props<{tipoIdentificacion : any}>());

export const saveTipoIdentificacionsFormError = createAction('[TipoIdentificacion Form] Save TipoIdentificacions Form Error', props<{e : any}>());



