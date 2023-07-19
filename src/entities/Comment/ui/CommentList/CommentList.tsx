import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Title } from "@/shared/ui/Title";
import { IComment } from "../../model/types/comment";
import css from "./CommentList.module.scss";
import { CommentCard } from "../CommentCard/CommentCard";

interface ICommentListProps {
  className?: string;
  comments: Array<IComment>;
  isLoading: boolean;
}

export const CommentList = memo(
  ({ className, comments, isLoading }: ICommentListProps) => {
    const { t } = useTranslation();

    return (
      <>
        {!isLoading && (
          <Title Tag="h3" className={css.CommentList__title}>
            {comments.length ? t("Комментарии") : t("Комментариев нет")}
          </Title>
        )}

        {comments.length > 0 && (
          <ul className={classNames(css.CommentList, {}, [className])}>
            {comments.map((oneComment) => (
              <CommentCard
                body={oneComment}
                key={oneComment.id}
                isLoading={isLoading}
              />
            ))}
          </ul>
        )}
      </>
    );
  }
);
