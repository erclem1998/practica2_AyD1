export class User {
  dpi: number;
  username: string;
  passwd: string;
  correo: string;
  edad: number;

  constructor(dpi: number, username: string, passwd: string, correo: string, edad: number) {
    this.dpi = dpi;
    this.username = username;
    this.passwd = passwd;
    this.correo = correo;
    this.edad = edad;
  }

}
