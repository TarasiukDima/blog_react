import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "shared/lib/hooks/userAppDIspatch/userAppDIspatch";
import { Section } from "shared/ui/Section";
import { Title } from "shared/ui/Title";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { AddCommentForm } from "features/addCommentForm";
import {
  DynamicModulesLoader,
  TReducersList,
} from "shared/lib/components/DynamicModulesLoader/DynamicModulesLoader";
import { AppLink, VariantLink } from "shared/ui/AppLink";
import { routesPath } from "app/config/roteConfig";
import { ArticleDetails } from "entities/Article";
import { CommentList } from "entities/Comment";
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from "../../model/slices/articleDetailsCommentsSlice";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { articleDetailsPageRecommendationsReducer } from "../../model/slices/articleDetailsPageRecommendationsSlice";
import {
  getArticleRecommendationsError,
  getArticleRecommendationsIsLoading,
} from "../../model/selectors/recommendations";
import { ArticleDetailsRecommendations } from "../ArticleDetailsRecommendations/ArticleDetailsRecommendations";
import { articleDetailsPageReducer } from "../../model/slices";

const reducers: TReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = () => {
  const { t } = useTranslation("articles");
  const { id } = useParams<{ id: string }>();
  const comments = useSelector(getArticleComments.selectAll);
  const isLoadingComments = useSelector(getArticleCommentsIsLoading);

  const isLoadingRecommendations = useSelector(
    getArticleRecommendationsIsLoading
  );
  const errorRecommendations = useSelector(getArticleRecommendationsError);

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

  if (!id) {
    return (
      <Section>
        <Title Tag="h1">{t("Статья не найдена")}</Title>
      </Section>
    );
  }

  return (
    <DynamicModulesLoader reducers={reducers} removeAfterUnmount>
      <Section>
        <AppLink variant={VariantLink.BUTTON_LINK} to={routesPath.articles}>
          {t("Назад к статьям")}
        </AppLink>
        <ArticleDetails id={id} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList comments={comments} isLoading={isLoadingComments} />
        <ArticleDetailsRecommendations />
      </Section>
    </DynamicModulesLoader>
  );
};

export default memo(ArticleDetailsPage);
