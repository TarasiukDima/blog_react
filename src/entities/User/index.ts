export type { IUserSchema, IUser } from "./model/types/user";
export { UserRoles } from "./model/consts/consts";

export { getUserAuthData } from "./model/selectors/getUserAuthData/getUserAuthData";
export { getUserInited } from "./model/selectors/getUserInited/getUserInited";
export {
  getUserRoles,
  isUserAdmin,
  isUserManager,
} from "./model/selectors/getUserRoles/getUserRoles";

export { userReducer, userActions } from "./model/slice/userSlice";
