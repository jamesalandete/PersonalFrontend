import { ITipoIdentificacion } from "src/app/interfaces/tipo-documentos.interface";


export interface TipoIdentificacionState {
  loading : boolean,
  list : ReadonlyArray<ITipoIdentificacion>,
  form    : {},
  save : boolean
}
