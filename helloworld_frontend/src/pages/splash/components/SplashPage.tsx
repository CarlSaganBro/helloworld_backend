import { NavLink, Outlet } from "react-router-dom";
import logo from "./../../../assets/OlderWatchTracer.png";

const linkStyle = ({ isActive }: { isActive: boolean }) => ({
  color: isActive ? "#FC9D1F" : "#3a3f45",
  textDecoration: "none",
  fontWeight: isActive ? "bold" : "normal",
  background: isActive ? "rgb(255 255 255 / 60%)" : "none",
  padding: "8px",
  borderRadius: "8px",
  width: "80px",
});

export const SplashPage = ({}) => {
  return (
    <div>
      <header
        style={{
          display: "flex",
          gap: "24px",
          height: "50px",
          padding: "1rem",
          background: "rgb(0 0 0 / 10%)",
          alignItems: "center",
          borderRadius: "8px",
          margin: "16px",
        }}
      >
        <img style={{ height: "50px", width: "auto" }} src={logo} alt={""} />
        <nav style={{ display: "flex", gap: "1rem", textDecoration: "none" }}>
          <NavLink to={"rules"} style={linkStyle}>
            Rules
          </NavLink>
          <NavLink to={"bracket"} style={linkStyle}>
            Bracket
          </NavLink>
          <NavLink to={"teams"} style={linkStyle}>
            Teams
          </NavLink>
        </nav>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            marginLeft: "auto",
          }}
        >
          <select disabled={true}>
            <option value={"Cycle 3"}>Cycle 3</option>
          </select>
        </div>
      </header>
      <Outlet />
    </div>
  );
};
