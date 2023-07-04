import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/userAppDIspatch/userAppDIspatch";
import {
  DynamicModulesLoader,
  TReducersList,
} from "shared/lib/components/DynamicModulesLoader/DynamicModulesLoader";
import { Input } from "shared/ui/Input";
import {
  addCommentFormActions,
  addCommentFormReducer,
} from "../../model/slices/addCommentFormSlice";
import {
  getAddCommentFormError,
  getAddCommentFormText,
} from "../../model/selectors/addCommentFormSelectors";
import css from "./AddCommentForm.module.scss";

export interface IAddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: TReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo(
  ({ className, onSendComment }: IAddCommentFormProps) => {
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback(
      (value: string) => {
        dispatch(addCommentFormActions.setText(value));
      },
      [dispatch]
    );

    const onSendHandler = useCallback(
      (event: React.FormEvent) => {
        event.preventDefault();

        onSendComment(text || "");
        onCommentTextChange("");
      },
      [onCommentTextChange, onSendComment, text]
    );

    return (
      <DynamicModulesLoader reducers={reducers}>
        <form
          className={classNames(css.AddCommentForm, {}, [className])}
          onSubmit={onSendHandler}
        >
          <Input
            className={css.AddCommentForm__input}
            placeholder={t("Введите текст комментария")}
            value={text}
            onChange={onCommentTextChange}
          />

          <Input type="submit" value={t("Отправить")} />
        </form>
      </DynamicModulesLoader>
    );
  }
);

export default AddCommentForm;
