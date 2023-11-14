import { Action, createReducer, on, State } from "@ngrx/store";
import * as actions from './person.actions';
import { PersonState } from "./person.state";
import { IPersonas } from './../../interfaces/personas.interface'

export const initStatePerson : PersonState = {
  loading : false,
  list : [],
  form    : {},
  save : false
}

export const PersonLoadReducer = createReducer(
  initStatePerson,
  on(actions.loadPersons, (state) => {
    return { ...state,loading : true, save : false }
  }),
  on(actions.loadPersonsSuccess, (state ,{ list }) => {
    return { ...state,loading : false, list : list, save : false }
  }),
  on(actions.loadPersonsForm, (state , PersonModel) => {
    return { ...state,loading : false,  form : PersonModel, save : false }
  }),
  on(actions.savePersonsForm, (state , PersonModel) => {
    return { ...state,loading : false,  form : PersonModel , save : false}
  }),
  on(actions.savePersonsFormSuccess, (state , PersonModel) => {
    return { ...state,loading : false, save : true}
  }),
);
