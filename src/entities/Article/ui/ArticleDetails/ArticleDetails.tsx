import { ReactNode, memo, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModulesLoader,
  TReducersList,
} from "shared/lib/components/DynamicModulesLoader/DynamicModulesLoader";
import { useAppDispatch } from "shared/lib/hooks/userAppDIspatch/userAppDIspatch";
import { Text, TextTheme } from "shared/ui/Text";
import { Avatar } from "shared/ui/Avatar";
import { Skeleton } from "shared/ui/Skeleton";
import { Title } from "shared/ui/Title";
import { Icon } from "shared/ui/Icon";
import { Paragraph } from "shared/ui/Paragraph";
import imgDefault from "shared/assets/images/placeholder.png";
import ImgCalendar from "shared/assets/icons/calendar.svg";
import ImgEye from "shared/assets/icons/eye.svg";
import { ArticleCodeBlockDetails } from "../ArticleCodeBlockDetails/ArticleCodeBlockDetails";
import { ArticleImageBlockDetails } from "../ArticleImageBlockDetails/ArticleImageBlockDetails";
import { ArticleTextBlockDetails } from "../ArticleTextBlockDetails/ArticleTextBlockDetails";
import { articleReducer } from "../../model/slice/articleSlice";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import { getArticleLoading } from "../../model/selectors/getArticleLoading/getArticleLoading";
import { getArticleError } from "../../model/selectors/getArticleError/getArticleError";
import { getArticleData } from "../../model/selectors/getArticleData/getArticleData";
import { ArticleBlockType, TArticleBlock } from "../../model/types/article";
import css from "./ArticleDetails.module.scss";

interface IProfileCardProps {
  className?: string;
  id: string;
}

const reducers: TReducersList = {
  article: articleReducer,
};

export const ArticleDetails = memo(
  ({ className = "", id }: IProfileCardProps) => {
    const { t } = useTranslation("articles");
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleLoading);
    const error = useSelector(getArticleError);
    const articleData = useSelector(getArticleData);

    useEffect(() => {
      if (__PROJECT__ !== "storybook") {
        dispatch(fetchArticleById(id));
      }
    }, [id, dispatch]);

    const renderBlock = useCallback((block: TArticleBlock) => {
      switch (block.type) {
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockDetails key={block.id} block={block} />;
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockDetails key={block.id} block={block} />;
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockDetails key={block.id} block={block} />;
      default:
        return null;
      }
    }, []);

    let content: ReactNode;

    if (isLoading) {
      content = (
        <>
          <Skeleton width={200} height={200} type="circle" place="center" />
          <Skeleton width="20%" height={24} type="square" />
          <Skeleton width="60%" height={24} type="square" />
          <Skeleton height={200} type="square" />
          <Skeleton height={200} type="square" />
          <Skeleton height={200} type="square" />
        </>
      );
    } else if (error) {
      content = (
        <Text
          title={t("Ошибка загрузки данных статьи")}
          theme={TextTheme.ERROR}
        />
      );
    } else {
      content = (
        <>
          <Avatar
            className={css.ArticleDetails__avatar}
            size={200}
            src={articleData?.img || imgDefault}
          />
          <Title className={css.ArticleDetails__title} Tag="h1">
            {articleData?.title}
          </Title>
          <Paragraph className={css.ArticleDetails__sybTitle}>
            {articleData?.subtitle}
          </Paragraph>

          <Paragraph className={css.ArticleDetails__views}>
            <Icon Svg={ImgEye} />
            {articleData?.views || 0}
          </Paragraph>

          <Paragraph className={css.ArticleDetails__date}>
            <Icon Svg={ImgCalendar} />
            {articleData?.createdAt}
          </Paragraph>

          {articleData?.blocks.map(renderBlock)}
        </>
      );
    }

    return (
      <DynamicModulesLoader reducers={reducers} removeAfterUnmount>
        <div className={classNames(css.ArticleDetails, {}, [className])}>
          {content}
        </div>
      </DynamicModulesLoader>
    );
  }
);
