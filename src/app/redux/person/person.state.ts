import { IPersonas } from "src/app/interfaces/personas.interface";


export interface PersonState {
  loading: boolean;
  list: IPersonas[] | [];
  form: {};
  save: boolean;
}
