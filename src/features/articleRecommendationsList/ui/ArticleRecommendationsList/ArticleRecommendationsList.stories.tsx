import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { articleMockContent } from "@/shared/lib/tests/mocks/mockData/mockData";
import { ArticleRecommendationsList as ArticleRecommendationsListComponent } from "./ArticleRecommendationsList";

const meta: Meta<typeof ArticleRecommendationsListComponent> = {
  title: "features/Article/ArticleRecommendationsList",
  component: ArticleRecommendationsListComponent,
  tags: ["pages"],
  args: {},
  parameters: {
    mockData: [
      {
        url: `${__API__}/articles?_limit=4`,
        method: "GET",
        status: 200,
        response: [
          articleMockContent,
          { ...articleMockContent, id: "2" },
          { ...articleMockContent, id: "3" },
          { ...articleMockContent, id: "4" },
        ],
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof ArticleRecommendationsListComponent>;

export const ArticleRecommendationsList: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      articleDetails: {
        isLoading: false,
        data: articleMockContent,
        error: null,
      },
    }),
  ],
};
