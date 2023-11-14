export class LoginModel {
  usuario: string;
  pass: string;
  constructor() {
    this.usuario = '';
    this.pass = '';
  }
}

export interface ILogin {
  usuario: string;
  pass: string;
}