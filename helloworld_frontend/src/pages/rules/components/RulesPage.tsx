import { NavLink, Outlet } from "react-router-dom";
import { RULES_PAGES } from "../utils/pageMetadata.ts";

const linkStyle = ({ isActive }: { isActive: boolean }) => ({
  color: isActive ? "#FC9D1F" : "#3a3f45",
  textDecoration: "none",
  fontWeight: isActive ? "bold" : "normal",
  background: isActive ? "rgb(255 255 255 / 80%)" : "none",
  padding: "8px",
  borderRadius: "8px",
});

export const RulesPage = ({}) => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <aside
        style={{
          width: "150px",
          background: "rgb(0 0 0 / 5%)",
          color: "#fff",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          margin: "16px",
          borderRadius: "8px",
        }}
      >
        <NavLink to={RULES_PAGES.TOURNAMENT.path} style={linkStyle}>
          Tournament
        </NavLink>
        <NavLink to={RULES_PAGES.SIGNUP.path} style={linkStyle}>
          Signups
        </NavLink>
      </aside>
      {/* This is where children render */}
      <Outlet />
    </div>
  );
};
