export interface IRating {
  id?: string;
  userId?: string;
  articleId?: string;
  rate: number;
  feedback: string;
}
