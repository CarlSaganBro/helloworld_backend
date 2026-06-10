import { NavLink, Outlet } from "react-router-dom";
import { SIGNUP_PAGE, TOURNAMENT_PAGE } from "../utils/pageContent.tsx";

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
        <NavLink to={TOURNAMENT_PAGE.path} style={linkStyle}>
          {TOURNAMENT_PAGE.title}
        </NavLink>
        <NavLink to={SIGNUP_PAGE.path} style={linkStyle}>
          {SIGNUP_PAGE.title}
        </NavLink>
      </aside>
      {/* This is where children render */}
      <Outlet />
    </div>
  );
};
