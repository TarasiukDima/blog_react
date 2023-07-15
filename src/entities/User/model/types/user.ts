import { UserRoles } from "../consts/consts";

export interface IUser {
  id: string;
  username: string;
  avatar?: string;
  roles?: Array<UserRoles>;
}

export interface IUserSchema {
  authData?: IUser | null;

  _inited: boolean;
}
