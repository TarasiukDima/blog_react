import { IUser } from "@/entities/User";
import { ArticleBlockType, ArticleType } from "../consts/consts";

interface IArticleBaseBlock {
  id: string;
  type: ArticleBlockType;
}

export interface IArticleCodeBlock extends IArticleBaseBlock {
  type: ArticleBlockType.CODE;
  code: string;
}

export interface IArticleImageBlock extends IArticleBaseBlock {
  type: ArticleBlockType.IMAGE;
  src: string;
  title: string;
}

export interface IArticleTextBlock extends IArticleBaseBlock {
  type: ArticleBlockType.TEXT;
  title?: string;
  paragraphs: Array<string>;
}

export type TArticleBlock =
  | IArticleCodeBlock
  | IArticleImageBlock
  | IArticleTextBlock;

export interface IArticle {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  user: IUser;
  type: Array<ArticleType>;
  blocks: Array<TArticleBlock>;
}
