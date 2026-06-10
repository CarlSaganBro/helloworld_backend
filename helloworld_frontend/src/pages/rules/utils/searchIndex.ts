import { SignupsRulesContent, TournamentRulesContent } from "./pageContent.tsx";

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
    content: "",
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
