import { FC, useMemo } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { routesPath } from "../../../config/roteConfig";
import { UserRoles, getUserRoles } from "../../../../entities/User";

interface ICheckRolesProps {
  children: JSX.Element;
  roles: Array<UserRoles>;
}

export const CheckRoles: FC<ICheckRolesProps> = ({ roles, children }) => {
  const location = useLocation();
  const userRoles = useSelector(getUserRoles);

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true;
    }

    return roles.some((requeryRole) => {
      const hasRole = userRoles.includes(requeryRole);

      return hasRole;
    });
  }, [roles, userRoles]);

  if (!hasRequiredRoles) {
    return (
      <Navigate to={routesPath.forbidden} state={{ from: location }} replace />
    );
  }

  return children;
};
