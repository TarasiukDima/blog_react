import { memo } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/userAppDIspatch/userAppDIspatch";
import { classNames } from "shared/lib/classNames/classNames";
import { Title } from "shared/ui/Title";
// eslint-disable-next-line max-len
import { fetchArticleRecommendations } from "../../model/services/fetchArticleRecommendations/fetchArticleRecommendations";
import { ArticleList } from "../../../../entities/Article";
import {
  getArticleRecommendationsError,
  getArticleRecommendationsIsLoading,
} from "../../model/selectors/recommendations";
import { getArticleRecommendations } from "../../model/slices/articleDetailsPageRecommendationsSlice";
import css from "./ArticleDetailsRecommendations.module.scss";

interface IArticleDetailsRecommendationsProps {
  className?: string;
}

export const ArticleDetailsRecommendations = memo(
  ({ className }: IArticleDetailsRecommendationsProps) => {
    const { t } = useTranslation("articles");
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const isLoadingRecommendations = useSelector(
      getArticleRecommendationsIsLoading
    );
    const errorRecommendations = useSelector(getArticleRecommendationsError);
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
      dispatch(fetchArticleRecommendations());
    });

    return (
      <div
        className={classNames(css.ArticleDetailsRecommendations, {}, [
          className,
        ])}
      >
        <Title Tag="h3">{t("Рекомендации")}</Title>

        <ArticleList
          articles={recommendations}
          isLoading={isLoadingRecommendations}
          target="_blank"
        />
      </div>
    );
  }
);
