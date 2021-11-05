import { PostModel } from "./PostModel";

export class ThemeModel {
    public id: number;
    public descricao: string;
    public postagem: PostModel[];
}
