import { RouteObject, createBrowserRouter } from "react-router-dom";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";
import { ProfilePage } from "pages/ProfilePage";
import { ErrorPage } from "pages/ErrorPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { ArticlesPage } from "pages/ArticlesPage";
import { ArticleDetailsPage } from "pages/ArticleDetailsPage";
import { ArticleEditPage } from "pages/ArticleEditPage";
import { routesPath } from "../../../config/roteConfig";
import { AppLayout } from "../../../ui/AppLayout";
import { ErrorBoundaryRoute } from "./ErrorBoundaryRoute";
import { RequireAuth } from "./RequireAuth";

export const routesApp: Array<RouteObject> = [
  {
    id: "1",
    path: routesPath.main,
    element: <MainPage />,
  },
  {
    id: "2",
    path: routesPath.about,
    element: <AboutPage />,
  },
  {
    id: "3",
    path: `${routesPath.profile}/:id`,
    element: (
      <RequireAuth>
        <ProfilePage />
      </RequireAuth>
    ),
  },
  {
    id: "4",
    path: routesPath.articles,
    element: (
      <RequireAuth>
        <ArticlesPage />
      </RequireAuth>
    ),
  },
  {
    id: "5",
    path: `${routesPath.one_article}/:id`,
    element: (
      <RequireAuth>
        <ArticleDetailsPage />
      </RequireAuth>
    ),
  },
  {
    id: "6",
    path: `${routesPath.article_edit}`,
    element: (
      <RequireAuth>
        <ArticleEditPage />
      </RequireAuth>
    ),
  },
  {
    id: "7",
    path: `${routesPath.article_create}`,
    element: (
      <RequireAuth>
        <ArticleEditPage />
      </RequireAuth>
    ),
  },

  {
    id: "9",
    path: routesPath.error,
    element: <ErrorPage />,
  },
  {
    id: "10",
    path: routesPath.not_found,
    element: <NotFoundPage />,
  },
];

export const appRouter = () => createBrowserRouter([
  {
    path: routesPath.main,
    element: <AppLayout />,
    errorElement: <ErrorBoundaryRoute />,
    children: routesApp,
  },
]);
