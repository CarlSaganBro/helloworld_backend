import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "../pages/home/components/HomePage.tsx";
import { PAGES } from "../pages/rules/utils/pageContent.tsx";
import type { PageDefinition } from "../pages/rules/types/types.tsx";
import { Layout } from "./Layout.tsx";

export const MyApp = ({}) => {
  const renderRoutes = (pages: PageDefinition[]) => {
    return pages.map((page) => {
      if (page.subPages && page.subPages.length > 0) {
        return (
          <Route key={page.path} path={page.path} element={page.element()}>
            {renderRoutes(page.subPages)}
          </Route>
        );
      } else {
        return (
          <Route key={page.path} path={page.path} element={page.element()} />
        );
      }
    });
  };

  return (
    <div>
      <Routes>
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {renderRoutes(PAGES)}
        </Route>
      </Routes>
    </div>
  );
};
