import { FC } from "react";
import { useRouteError, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { routesPath } from "@/app/config/roteConfig";

interface IError {
  message: string;
}

const ErrorBoundaryRoute: FC = () => {
  const { t } = useTranslation("error");
  const { message = t("Что-то пошло не так!") } = useRouteError() as IError;

  return (
    <Navigate to={routesPath.error} replace state={{ errorText: message }} />
  );
};

export { ErrorBoundaryRoute };
