import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/userAppDIspatch/userAppDIspatch";
import { AddCommentForm } from "features/addCommentForm";
// eslint-disable-next-line max-len
import { fetchCommentsByArticleId } from "pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { CommentList } from "entities/Comment";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { getArticleComments } from "../../model/slices/articleDetailsCommentsSlice";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";

interface IArticleDetailsCommentsProps {
  id: string;
}

export const ArticleDetailsComments = memo(
  ({ id }: IArticleDetailsCommentsProps) => {
    const comments = useSelector(getArticleComments.selectAll);
    const isLoadingComments = useSelector(getArticleCommentsIsLoading);
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
      dispatch(fetchCommentsByArticleId(id));
    });

    const onSendComment = useCallback(
      (text: string) => {
        dispatch(addCommentForArticle(text));
      },
      [dispatch]
    );

    return (
      <>
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList comments={comments} isLoading={isLoadingComments} />
      </>
    );
  }
);
