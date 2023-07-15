import { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { routesPath } from "../../../config/roteConfig";
import { getUserAuthData } from "../../../../entities/User";

interface IRequireAuthProps {
  children: JSX.Element;
}

export const RequireAuth: FC<IRequireAuthProps> = ({ children }) => {
  const auth = useSelector(getUserAuthData);
  const location = useLocation();

  if (!auth) {
    return <Navigate to={routesPath.main} state={{ from: location }} replace />;
  }

  return children;
};
