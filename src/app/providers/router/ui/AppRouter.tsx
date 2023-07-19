import { RouteObject, createBrowserRouter } from "react-router-dom";
import { MainPage } from "@/pages/MainPage";
import { AboutPage } from "@/pages/AboutPage";
import { ProfilePage } from "@/pages/ProfilePage";
import { ErrorPage } from "@/pages/ErrorPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ArticlesPage } from "@/pages/ArticlesPage";
import { ArticleDetailsPage } from "@/pages/ArticleDetailsPage";
import { ArticleEditPage } from "@/pages/ArticleEditPage";
import { AdminPanelPage } from "@/pages/AdminPanelPage";
import { ForbiddenPage } from "@/pages/ForbiddenPage";
import { routesPath } from "../../../config/roteConfig";
import { AppLayout } from "../../../ui/AppLayout";
import { ErrorBoundaryRoute } from "./ErrorBoundaryRoute";
import { RequireAuth } from "./RequireAuth";
import { CheckRoles } from "./CheckRoles";
import { UserRoles } from "../../../../entities/User";

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
    id: "8",
    path: `${routesPath.admin_panel}`,
    element: (
      <RequireAuth>
        <CheckRoles roles={[UserRoles.ADMIN, UserRoles.MANAGER]}>
          <AdminPanelPage />
        </CheckRoles>
      </RequireAuth>
    ),
  },

  {
    id: "9",
    path: `${routesPath.forbidden}`,
    element: <ForbiddenPage />,
  },
  {
    id: "10",
    path: routesPath.error,
    element: <ErrorPage />,
  },
  {
    id: "11",
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
