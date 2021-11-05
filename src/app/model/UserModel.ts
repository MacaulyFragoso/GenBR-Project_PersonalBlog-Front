import { PostModel } from "./PostModel";

export class UserModel {
    public id: number;
    public nome: string;
    public usuario: string;
    public senha: string;
	  public foto: string;
  	public tipo: string;
    public postagem: PostModel[];
}
