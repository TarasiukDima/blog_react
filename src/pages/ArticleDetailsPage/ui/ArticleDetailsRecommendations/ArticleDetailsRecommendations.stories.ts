import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ArticleDetailsRecommendations as ArticleDetailsRecommendationsComponent } from "./ArticleDetailsRecommendations";
import { ArticleType, IArticle } from "../../../../entities/Article";

const meta: Meta<typeof ArticleDetailsRecommendationsComponent> = {
  title: "pages/ArticleDetailsRecommendations",
  component: ArticleDetailsRecommendationsComponent,
  tags: ["pages"],
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsRecommendationsComponent>;

const articleContent: IArticle = {
  id: "123",
  title: "Javascript news",
  subtitle: "Что нового в JS за 2022 год?",
  img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
  views: 1022,
  createdAt: "26.02.2022",
  user: {
    id: "1",
    username: "admin",
    avatar:
      "https://cdn1.iconfinder.com/data/icons/people-49/512/_formal_mustache_man-01-1024.png",
  },
  type: [ArticleType.IT],
  blocks: [],
};

export const ArticleDetailsRecommendations: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      articleDetails: {
        isLoading: false,
        data: articleContent,
        error: null,
      },
    }),
  ],
};
