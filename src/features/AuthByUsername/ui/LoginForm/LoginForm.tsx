import React, { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Input } from "shared/ui/Input";
import { Text, TextTheme } from "shared/ui/Text";
import { DynamicModulesLoader, TReducersList } from "shared/lib/components/DynamicModulesLoader/DynamicModulesLoader";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import css from "./LoginForm.module.scss";

export interface ILoginFormProps {
  className?: string;
}

const initialReducers: TReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className }: ILoginFormProps) => {
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const { t } = useTranslation("forms");
  const dispatch = useDispatch();

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();

      // @ts-ignore
      dispatch(loginByUsername({ username, password }));
    },
    [dispatch, password, username]
  );

  return (
    <DynamicModulesLoader reducers={initialReducers} removeAfterUnmount>
      <form
        className={classNames(css.LoginForm, {}, [className])}
        onSubmit={onLoginSubmit}
      >
        <Text title={t("Форма авторизации")} />
        {error && (
          <Text
            text={t("Вы ввели неверный логин или пароль")}
            theme={TextTheme.ERROR}
          />
        )}

        <Input
          autofocus
          type="text"
          className={css.input}
          placeholder={t("Введите username")}
          onChange={onChangeUsername}
          value={username}
        />

        <Input
          type="text"
          className={css.input}
          placeholder={t("Введите пароль")}
          onChange={onChangePassword}
          value={password}
        />

        <Input
          type="submit"
          className={css.loginBtn}
          disabled={isLoading}
          value={t("Войти")}
        />
      </form>
    </DynamicModulesLoader>
  );
});

export default LoginForm;
