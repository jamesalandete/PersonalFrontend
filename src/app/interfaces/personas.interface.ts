import { ITipoIdentificacion } from "./tipo-documentos.interface";

export interface IPersonas {
  id: number;
  nombres: string;
  apellidos: string;
  tipoIdentificacionId: number;
  numeroIdentificacion: string;
  email: string;
  identificacion: string;
  nombreCompleto: string;
  activo: boolean;
  tipoIdentificacion: ITipoIdentificacion;
}
