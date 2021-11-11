import { ThemeModel } from "./ThemeModel";
import { UserModel } from "./UserModel";

export class PostModel {
    public id: number;
    public titulo: string;
    public texto: string;
    public date: Date;
    public usuario: UserModel;
    public tema: ThemeModel;
}
