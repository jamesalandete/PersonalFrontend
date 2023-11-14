export interface PersonModel {
  Id : number;
  Description : string;
  Year : number;
  Capacity : number;
  Make : string;
  Active : number;
}
export interface PersonState {
  [id: number]: PersonModel;
}
