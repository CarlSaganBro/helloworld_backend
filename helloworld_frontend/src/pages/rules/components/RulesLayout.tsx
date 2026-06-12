import { NavLink, Outlet } from "react-router-dom";
import { RULES_PAGE } from "../utils/pageContent.tsx";
import type { RulesPageDefinition } from "../types/types.tsx";
import "./style/RulesLayout.css";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? "rulesNavLink activeRulesNavLink" : "rulesNavLink";

export const RulesLayout = ({}) => {
  const renderNavLinks = (pages: RulesPageDefinition[]) => {
    return pages.map((page) => {
      return (
        <NavLink key={page.path} to={page.path} className={linkClass}>
          {page.title}
        </NavLink>
      );
    });
  };

  return (
    <div className="rulesLayout">
      <aside className="rulesSidebar">
        {renderNavLinks(RULES_PAGE.subPages)}
      </aside>

      <Outlet />
    </div>
  );
};
