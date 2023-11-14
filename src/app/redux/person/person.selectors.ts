import { createSelector } from '@ngrx/store'
import { AppState } from '../app.state'
import { PersonState } from './person.state';

export const selectPerson = (state : AppState) => state.personLoad;

export const selectLoadPersons = createSelector(
  selectPerson,
  (list : PersonState ) => list

)
