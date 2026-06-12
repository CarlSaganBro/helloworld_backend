import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../assets/OlderWatchTracer.png";
import {
  BRACKET_PAGE,
  RULES_PAGE,
  TEAMS_PAGE,
} from "../pages/rules/utils/pageContent.tsx";
import "./style/Layout.css";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? "navLink activeNavLink" : "navLink";

export const Layout = ({}) => {
  return (
    <div>
      <header className="header">
        <Link to={"/"}>
          <img className="headerLogo" src={logo} alt={""} />
        </Link>
        <nav className="nav">
          <NavLink to={RULES_PAGE.path} className={linkClass}>
            {RULES_PAGE.title}
          </NavLink>
          <NavLink to={BRACKET_PAGE.path} className={linkClass}>
            {BRACKET_PAGE.title}
          </NavLink>
          <NavLink to={TEAMS_PAGE.path} className={linkClass}>
            {TEAMS_PAGE.title}
          </NavLink>
        </nav>
        <div className="headerRight">
          <select disabled={true}>
            <option value={"Cycle 3"}>Cycle 3</option>
          </select>
        </div>
      </header>

      <Outlet />
    </div>
  );
};
