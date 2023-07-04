import { IUser } from "../../../User";

export interface IComment {
  id: string;
  text: string;
  user: IUser;
}
