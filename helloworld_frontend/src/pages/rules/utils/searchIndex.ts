import {
  SignupsRulesContent,
  TournamentRulesContent,
} from "../assets/pageContent.ts";

export interface SearchIndexItem {
  path: string;
  content: string;
}

export const searchIndex: SearchIndexItem[] = [
  {
    path: "/",
    content: "",
  },
  {
    path: "/rules",
    content: "Learn more about our company and what we do.",
  },
  {
    path: "/rules/tournament",
    content: TournamentRulesContent.map((rule) => rule.content).join(" "),
  },
  {
    path: "/rules/signup",
    content: SignupsRulesContent.map((rule) => rule.content).join(" "),
  },
];
