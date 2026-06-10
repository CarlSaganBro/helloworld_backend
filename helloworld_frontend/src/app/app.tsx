import { Routes, Route, Navigate } from "react-router-dom";
import { BracketPage } from "../pages/bracket/components/BracketPage.tsx";
import { TeamsPage } from "../pages/teams/components/TeamsPage.tsx";
import { RulesPage } from "../pages/rules/components/RulesPage.tsx";
import { SignupRules } from "../pages/rules/components/SignupRules.tsx";
import { SplashPage } from "../pages/splash/components/SplashPage.tsx";
import { TournamentRules } from "../pages/rules/components/TournamentRules.tsx";
import { RULES_PAGES } from "../pages/rules/utils/pageMetadata.ts";

export const MyApp = ({}) => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/" element={<SplashPage />}>
          <Route path="/bracket" element={<BracketPage />} />
          <Route path="/rules" element={<RulesPage />}>
            <Route
              path={RULES_PAGES.TOURNAMENT.path}
              element={<TournamentRules />}
            />
            <Route path={RULES_PAGES.SIGNUP.path} element={<SignupRules />} />
          </Route>
          <Route path="/teams" element={<TeamsPage />} />
        </Route>
      </Routes>
    </div>
  );
};
