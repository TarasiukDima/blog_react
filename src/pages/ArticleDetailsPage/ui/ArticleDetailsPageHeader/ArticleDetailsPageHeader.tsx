import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, VariantLink } from "shared/ui/AppLink";
import { routesPath } from "app/config/roteConfig";
import { useSelector } from "react-redux";
import { getArticleData } from "../../../../entities/Article";
import { getCanEditArticle } from "../../model/selectors/article";
import css from "./ArticleDetailsPageHeader.module.scss";

interface IArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo(
  ({ className }: IArticleDetailsPageHeaderProps) => {
    const { t } = useTranslation("articles");
    const article = useSelector(getArticleData);
    const canEdit = useSelector(getCanEditArticle);

    return (
      <div
        className={classNames(css.ArticleDetailsPageHeader, {}, [className])}
      >
        <AppLink variant={VariantLink.BUTTON_LINK} to={routesPath.articles}>
          {t("Назад к статьям")}
        </AppLink>

        {canEdit && (
          <AppLink
            variant={VariantLink.BUTTON_LINK}
            to={`${routesPath.articles}/${article?.id}/edit`}
          >
            {t("Редактировать")}
          </AppLink>
        )}
      </div>
    );
  }
);
