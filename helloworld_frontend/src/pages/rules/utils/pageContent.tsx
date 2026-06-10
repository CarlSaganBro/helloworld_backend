import type { PageDefinition, RuleContent } from "../types/types.tsx";
import { TournamentRules } from "../components/TournamentRules.tsx";
import { RulesPage } from "../components/RulesPage.tsx";
import { SignupRules } from "../components/SignupRules.tsx";
import { TeamsPage } from "../../teams/components/TeamsPage.tsx";
import { BracketPage } from "../../bracket/components/BracketPage.tsx";

export const TOURNAMENT_PAGE = {
  title: "Tournament",
  path: "tournament",
  element: <TournamentRules />,
};

export const SIGNUP_PAGE = {
  title: "Signups",
  path: "signup",
  element: <SignupRules />,
};

export const RULES_PAGE = {
  title: "Rulebook",
  path: "/rules",
  element: <RulesPage />,
  subPages: [TOURNAMENT_PAGE, SIGNUP_PAGE],
};

export const BRACKET_PAGE = {
  title: "Bracket",
  path: "/bracket",
  element: <BracketPage />,
};

export const TEAMS_PAGE = {
  title: "Teams",
  path: "/teams",
  element: <TeamsPage />,
};

export const PAGES: PageDefinition[] = [RULES_PAGE, BRACKET_PAGE, TEAMS_PAGE];

export const TournamentRulesContent: RuleContent[] = [
  {
    content:
      "Players must stay in assigned roles when teams are <b>finalized</b>. This includes switching to a non-assigned role to use an ability from a hero that is in the non-assigned role. Example of this is a player assigned to a Support role switching to Symmetra to use the teleport ability at the beginning of the game.",
    reason:
      "To keep someone signed up as a Platinum Support from switching to DPS mid-game where they are Masters.",
  },
  {
    content: "No heroes released after 4/26 will be available to pick.",
    reason:
      "New heroes are a work in progress and they could be unbalanced when released.",
  },
  {
    content:
      "No sandbagging. This means signing up for a lower rank than you actually are. If we become aware that you break this rule, this will result in a ban from the server for jeopardizing the integrity of a community event.",
  },
  {
    content:
      "During matches, the only in-game spectators allowed are casters and tournament administrators. If you want to watch the game, you will have to watch the live stream to spectate.",
    reason:
      "To prevent live time coaching amongst players as the stream will be more delayed.",
  },
  {
    content:
      "Only team members are allowed in team chats during play. During the day of the tournament, you must be in your respective team channels at least 15 minutes before your first game starts.",
  },
  {
    content:
      "Keep things respectful with the other players. This is a community event with no cash prize. This is purely for friendly bragging rights. Surely everyone would like to win but there will be zero tolerance for putting down teammates or opposing teams who are ultimately playing for a good time and to meet other players. Friendly banter is encouraged. However bullying will not be tolerated. Sportsmanship is what we want to see!",
  },
  {
    content: "No malicious staggering or spawn camping.",
  },
  {
    content:
      "The winner of the tournament will receive a badge of honor stating that you are a Olderwatch Elite Champion.",
  },
];

export const SignupsRulesContent: RuleContent[] = [
  {
    content:
      "All players must have a role queue rank from this or previous seasons. If you only play Quickplay, it will still be required to obtain a rank. This can be done through the 10 placement games.",
    reason:
      "For creating a reliable baseline for team balancing, since stats alone did not provide enough context in the previous tournament. A current or recent competitive rank helps us better understand player skill and create fairer, more balanced teams.",
  },
  {
    content:
      "All players must submit a screenshot to @SuhSpence of their current or previous competitive season profiles that validate their ranks.",
    reason: "We will need evidence that you are in the rank you state.",
  },
  {
    content:
      "No sign ups allowed using ranks from a smurf or lower ranked alternative account.",
    reason:
      "To be the most accurate with balance, we need actual ranks submitted.",
  },
];
