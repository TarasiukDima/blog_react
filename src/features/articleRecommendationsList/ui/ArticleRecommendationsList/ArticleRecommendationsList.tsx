import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Title } from "shared/ui/Title";
import { ArticleList } from "../../../../entities/Article";
import { useArticleRecommendationList } from "../../api/articleRecommendationsApi";
import css from "./ArticleRecommendationsList.module.scss";

interface IArticleRecommendationsListProps {
  className?: string;
  countArticles?: number;
}

export const ArticleRecommendationsList = memo(
  ({ className, countArticles = 4 }: IArticleRecommendationsListProps) => {
    const { t } = useTranslation("articles");

    const {
      error: errorRecommendations,
      isLoading: isLoadingRecommendations,
      data: recommendations,
    } = useArticleRecommendationList(countArticles);

    return (
      <div
        className={classNames(css.ArticleRecommendationsList, {}, [className])}
      >
        <Title Tag="h3">{t("Рекомендации")}</Title>

        <ArticleList
          articles={recommendations || []}
          isLoading={isLoadingRecommendations}
          target="_blank"
        />
      </div>
    );
  }
);
