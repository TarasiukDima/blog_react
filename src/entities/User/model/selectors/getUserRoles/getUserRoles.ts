import { createSelector } from "@reduxjs/toolkit";
import { IStateSchema } from "app/providers/StoreProvider";
import { UserRoles } from "../../consts/consts";

export const getUserRoles = (state: IStateSchema) => state.user.authData?.roles || [];

export const isUserAdmin = createSelector(getUserRoles, (roles) => roles.includes(UserRoles.ADMIN));
export const isUserManager = createSelector(getUserRoles, (roles) => roles.includes(UserRoles.MANAGER));
