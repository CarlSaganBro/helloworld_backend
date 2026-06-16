import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../assets/olderwatch_temp.png";
import {
  BRACKET_PAGE,
  RULES_PAGE,
  TEAMS_PAGE,
} from "../pages/rules/utils/pageContent.tsx";
import { Trapezium } from "../assets/Trapezium.tsx";
import "./style/Layout.css";
import { CountdownWidget } from "./CountdownWidget.tsx";
import { useCountdown } from "../hooks/useCountdown.tsx";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? "navLink activeNavLink" : "navLink";

export const Layout = ({}) => {
  const tournamentCountdown = useCountdown("2026-08-22T23:59:59");
  return (
    <div>
      <header className="header">
        <div className="headerLeft">
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
        </div>
        <div className={"headerCenter"}>
          <Trapezium color={"#0B2C3E"} />
          <Link to={"/"}>
            <img className="headerLogo" src={logo} alt={""} />
          </Link>
        </div>
        <div className="headerRight">
          <CountdownWidget
            countdown={tournamentCountdown}
            flavorText={"Olderwatch elite championship starts in"}
          />
        </div>
      </header>
      <Outlet />
    </div>
  );
};
