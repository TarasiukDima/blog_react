export interface IUser {
  id: string;
  username: string;
}

export interface IUserSchema {
  authData?: IUser | null;

  _inited: boolean;
}
