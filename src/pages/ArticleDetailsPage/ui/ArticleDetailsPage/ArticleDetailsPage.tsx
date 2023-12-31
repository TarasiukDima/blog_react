import { memo } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "@/shared/lib/hooks/userAppDIspatch/userAppDIspatch";
import { Section } from "@/shared/ui/Section";
import { Title } from "@/shared/ui/Title";
import {
  DynamicModulesLoader,
  TReducersList,
} from "@/shared/lib/components/DynamicModulesLoader/DynamicModulesLoader";
import { ArticleDetails } from "@/entities/Article";
import { ArticleRecommendationsList } from "@/features/articleRecommendationsList";
import { articleDetailsPageReducer } from "../../model/slices";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";
import { ArticleDetailsComments } from "../ArticleDetailsComments/ArticleDetailsComments";
import { ArticleRating } from "@/features/articleRating";

const reducers: TReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = () => {
  const { t } = useTranslation("articles");
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

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
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <ArticleRating articleId={id} />
        <ArticleDetailsComments id={id} />
        <ArticleRecommendationsList />
      </Section>
    </DynamicModulesLoader>
  );
};

export default memo(ArticleDetailsPage);
