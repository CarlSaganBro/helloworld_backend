import type { PageDefinition } from "../types/types.ts";

export const RULES_PAGES: {
  TOURNAMENT: PageDefinition;
  SIGNUP: PageDefinition;
} = {
  TOURNAMENT: {
    title: "Tournament",
    path: "tournament",
  },
  SIGNUP: {
    title: "Signups",
    path: "signup",
  },
};
