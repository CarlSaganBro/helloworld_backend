import { NavLink, Outlet } from "react-router-dom";
import { RULES_PAGE } from "../utils/pageContent.tsx";
import type { RulesPageDefinition } from "../types/types.tsx";

const linkStyle = ({ isActive }: { isActive: boolean }) => ({
  color: isActive ? "#FC9D1F" : "#3a3f45",
  textDecoration: "none",
  fontWeight: isActive ? "bold" : "normal",
  background: isActive ? "rgb(255 255 255 / 80%)" : "none",
  padding: "8px",
  borderRadius: "8px",
});

export const RulesLayout = ({}) => {
  const renderNavLinks = (pages: RulesPageDefinition[]) => {
    return pages.map((page) => {
      return (
        <NavLink key={page.path} to={page.path} style={linkStyle}>
          {page.title}
        </NavLink>
      );
    });
  };
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <aside
        style={{
          background: "rgb(0 0 0 / 5%)",
          color: "#fff",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          margin: "16px",
          borderRadius: "8px",
          height: "100vh",
          minWidth: "150px",
        }}
      >
        {renderNavLinks(RULES_PAGE.subPages)}
      </aside>
      {/* This is where children render */}
      <Outlet />
    </div>
  );
};
