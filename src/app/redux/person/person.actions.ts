import { createAction, props } from '@ngrx/store';
import { IPersonas } from 'src/app/interfaces/personas.interface';

export const loadPersons = createAction('[Person List] Load Persons');

export const loadPersonsSuccess = createAction(
  '[Person List] Load Persons Success',
  props<{ list: IPersonas[] }>()
);

export const loadPersonsError = createAction('[Person List] Load Persons Error');

export const loadPersonsForm = createAction('[Person Form] Load Persons Form', props<{persons : IPersonas}>());;

export const savePersonsForm = createAction(
  '[Person Form] Save Persons Form',
  props<{ persons: IPersonas[] }>()
);

export const updatePersonsForm = createAction(
  '[Person Form]  Update Persons Form',
  props<{ persons: IPersonas[] }>()
);

export const savePersonsFormSuccess = createAction('[Person Form] Save Persons Form Success', props<{person : IPersonas}>());

export const savePersonsFormError = createAction('[Person Form] Save Persons Form Error', props<{e : any}>());



