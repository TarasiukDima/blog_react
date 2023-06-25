import { IUserSchema } from "entities/User";
import { ILoginSchema } from "features/AuthByUsername";

export interface IStateSchema {
  user: IUserSchema;
  loginForm: ILoginSchema;
}
