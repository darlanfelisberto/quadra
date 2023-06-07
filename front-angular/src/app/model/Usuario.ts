export class Usuario{
  idUsuario?: number | undefined;
  nome!:string;
  password!:string;
  username!:string;
  email!:string;
  listPermissoes:[] = [];
}
