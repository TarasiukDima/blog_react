import { ReactNode, memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Skeleton } from "@/shared/ui/Skeleton";
import { Paragraph } from "@/shared/ui/Paragraph";
import { Avatar } from "@/shared/ui/Avatar";
import { AppLink } from "@/shared/ui/AppLink";
import { routesPath } from "@/app/config/roteConfig";
import { IComment } from "../../model/types/comment";
import css from "./CommentCard.module.scss";

interface ICommentCardProps {
  className?: string;
  body: IComment;
  isLoading: boolean;
}

export const CommentCard = memo(
  ({ className, body, isLoading }: ICommentCardProps) => {
    let content: ReactNode;

    if (isLoading) {
      content = (
        <>
          <div className={css.CommentCard__header}>
            <Skeleton type="circle" width={40} height={40} />
            <Skeleton
              className={css.CommentCard__header_name}
              type="square"
              width="50%"
              height={20}
            />
          </div>

          <Skeleton type="square" height={40} />
        </>
      );
    } else {
      content = (
        <>
          <AppLink
            to={`${routesPath.profile}/${body.user.id}`}
            className={css.CommentCard__header}
          >
            <Avatar
              size={40}
              position="none"
              src={body.user.avatar ?? undefined}
            />
            <Paragraph className={css.CommentCard__header_name}>
              {body.user.username}
            </Paragraph>
          </AppLink>

          <Paragraph className={css.CommentCard__content}>
            {body.text}
          </Paragraph>
        </>
      );
    }

    return (
      <li className={classNames(css.CommentCard, {}, [className])}>
        {content}
      </li>
    );
  }
);
