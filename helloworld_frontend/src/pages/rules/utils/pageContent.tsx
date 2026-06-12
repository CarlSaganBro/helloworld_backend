import type {
  PageDefinition,
  RuleContent,
  RulesPageDefinition,
} from "../types/types.tsx";
import { RulesLayout } from "../components/RulesLayout.tsx";
import { TeamsPage } from "../../teams/components/TeamsPage.tsx";
import { BracketPage } from "../../bracket/components/BracketPage.tsx";
import { RulesPage } from "../components/RulesPage.tsx";

export const EligibilityContent: RuleContent[] = [
  {
    content:
      "All players must have a <b>Role Queue rank</b> from the current or previous competitive season. Players who only play Quick Play must complete placement matches to obtain a rank.",
    reason:
      "To create a reliable baseline for team balancing. A current or recent competitive rank provides a more accurate representation of player skill than statistics alone.",
  },
  {
    content:
      "All players must submit a screenshot validating their current or previous competitive rank.",
    reason: "To verify that submitted ranks are accurate.",
  },
  {
    content:
      "Players may not sign up using ranks from a smurf account or lower ranked alt account.",
    reason: "To ensure team balancing is based on a player's true skill level.",
  },
  {
    content:
      "No sandbagging. Registering at a rank lower than your actual skill level may result in a <b>server ban</b>.",
  },
];

export const TeamRulesContent: RuleContent[] = [
  {
    content:
      "Captains will be selected from among the players participating in the tournament.",
  },
  {
    content:
      "Team compositions will follow a <b>2-2-2</b> format consisting of: <ol><li>2 Tanks</li><li>2 DPS</li><li>2 Supports</li></ol>",
  },
  {
    content:
      "Players must remain in their <b>assigned roles</b> once teams are finalized. This includes switching to heroes outside an assigned role solely to use an ability. Example: A Support player may not switch to Symmetra for teleport placement before the match begins.",
    reason:
      "To prevent players from registering under one skill rating and competing in another role where they are significantly stronger.",
  },
  {
    content:
      "Only team members are permitted in team voice channels during matches.",
  },
  {
    content:
      "Players must be present in their designated team voice channel at least <b>15 minutes</b> before their first scheduled match.",
  },
];

export const PoolPlayContent: RuleContent[] = [
  {
    content:
      "Pool play consists of three single-round matches per team. Only <b>Control</b> and <b>Push</b> game modes will be used. Following pool play, teams will advance into the playoff bracket.",
    reason:
      "To prevent excessive point inflation that can occur in Escort and Hybrid overtime scenarios.",
  },
  {
    content:
      "Pool play first ban and map selection priority will be determined by coin flip.",
  },
  {
    content:
      "Pool play tiebreakers will be determined in the following order: <ol><li>Total Points</li><li>Point Differential</li><li>Total Eliminations</li></ol>",
  },
  {
    content:
      "Teams advancing from Pool Play will be seeded into the Main Bracket.",
  },
];

export const MainBracketContent: RuleContent[] = [
  {
    content:
      "The Main Bracket will use a <b>Double Elimination</b> format. Teams begin in the Winner's Bracket. A loss sends the team to the Loser's Bracket. A second loss eliminates the team from the tournament.",
    reason: "To guarantee a minimum of five games for every team.",
  },
  {
    content:
      "Winner's Bracket matches will be played as a <b>Best 2 out of 3</b> series.",
  },
  {
    content: "Loser's Bracket matches will be <b>Single Game Elimination</b>.",
  },
  {
    content:
      "Higher-seeded teams in the Winner's Bracket receive first choice of: • First Ban • Server Selection • Attack/Defense Selection • Map Selection Selection priority alternates each game in a series.",
  },
  {
    content:
      "In the Loser's Bracket, selection priority will be determined by coin flip.",
  },
];

export const ChampionshipFinalsContent: RuleContent[] = [
  {
    content:
      "The winner of the Loser's Bracket will face the winner of the Winner's Bracket in the Championship Finals.",
  },
  {
    content:
      "Championship Finals will be played as a <b>Best 2 out of 3</b> series.",
  },
  {
    content:
      "If an undefeated Winner's Bracket team loses the first Championship series, side-selection privileges for the second series will be awarded to the winning team.",
  },
];

export const GameplayRulesContent: RuleContent[] = [
  {
    content:
      "Only tournament casters and tournament administrators may spectate matches in-game. Players wishing to watch a match must use the official stream.",
    reason: "To prevent live coaching and maintain competitive integrity.",
  },
  {
    content: "Match pauses are only permitted for player disconnects.",
  },
  {
    content:
      "Each team receives a cumulative maximum of <b>5 minutes</b> of pause time. Pause time does not reset if a player reconnects and disconnects again.",
  },
  {
    content:
      "If a disconnected player does not return within 5 minutes, the match will continue as a 6v5 until either: • The match ends • The player reconnects",
  },
];

export const ConductAndSportsmanshipContent: RuleContent[] = [
  {
    content:
      "All participants must treat teammates, opponents, staff, and spectators with <b>respect</b>. Friendly banter is encouraged. Harassment, bullying, personal attacks, and unsportsmanlike conduct are prohibited.",
  },
  {
    content:
      "This tournament is a community-focused event with no cash prize. Participants are expected to prioritize sportsmanship and positive community interaction.",
  },
  {
    content:
      "Malicious staggering and intentional spawn camping are prohibited.",
  },
];

export const ELIGIBILITY_RULES_PAGE: RulesPageDefinition = {
  title: "Eligibility",
  path: "eligibility",
  element: () => <RulesPage pageDefinition={ELIGIBILITY_RULES_PAGE} />,
  content: EligibilityContent,
};

export const TEAM_RULES_PAGE: RulesPageDefinition = {
  title: "Team Rules",
  path: "team",
  element: () => <RulesPage pageDefinition={TEAM_RULES_PAGE} />,
  content: TeamRulesContent,
};

export const POOL_PLAY_RULES_PAGE: RulesPageDefinition = {
  title: "Pool Play",
  path: "pool",
  element: () => <RulesPage pageDefinition={POOL_PLAY_RULES_PAGE} />,
  content: PoolPlayContent,
};

export const MAIN_BRACKET_RULES_PAGE: RulesPageDefinition = {
  title: "Main Bracket",
  path: "bracket",
  element: () => <RulesPage pageDefinition={MAIN_BRACKET_RULES_PAGE} />,
  content: MainBracketContent,
};

export const FINALS_RULES_PAGE: RulesPageDefinition = {
  title: "Championship Finals",
  path: "finals",
  element: () => <RulesPage pageDefinition={FINALS_RULES_PAGE} />,
  content: ChampionshipFinalsContent,
};

export const GAMEPLAY_RULES_PAGE: RulesPageDefinition = {
  title: "Gameplay",
  path: "gameplay",
  element: () => <RulesPage pageDefinition={GAMEPLAY_RULES_PAGE} />,
  content: GameplayRulesContent,
};

export const CONDUCT_RULES_PAGE: RulesPageDefinition = {
  title: "Conduct and Sportsmanship",
  path: "conduct",
  element: () => <RulesPage pageDefinition={CONDUCT_RULES_PAGE} />,
  content: ConductAndSportsmanshipContent,
};

export const RULES_PAGE = {
  title: "Rulebook",
  path: "/rules",
  element: () => <RulesLayout />,
  subPages: [
    ELIGIBILITY_RULES_PAGE,
    TEAM_RULES_PAGE,
    POOL_PLAY_RULES_PAGE,
    MAIN_BRACKET_RULES_PAGE,
    FINALS_RULES_PAGE,
    GAMEPLAY_RULES_PAGE,
    CONDUCT_RULES_PAGE,
  ],
};

export const BRACKET_PAGE = {
  title: "Bracket",
  path: "/bracket",
  element: () => <BracketPage />,
};

export const TEAMS_PAGE = {
  title: "Teams",
  path: "/teams",
  element: () => <TeamsPage />,
};

export const PAGES: PageDefinition[] = [RULES_PAGE, BRACKET_PAGE, TEAMS_PAGE];
