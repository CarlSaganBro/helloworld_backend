import type { RuleContent } from "../types/types.ts";

export const TournamentRulesContent: RuleContent[] = [
  {
    content:
      "Players must stay in assigned roles when teams are finalized. This includes switching to a non-assigned role to use an ability from a hero that is in the non-assigned role. Example of this is a player assigned to a Support role switching to Symmetra to use the teleport ability at the beginning of the game.",
    reason:
      "To keep someone signed up as a Platinum Support from switching to DPS mid-game where they are Masters.",
  },
  {
    content: "No heroes released after 4/26 will be available to pick.",
    reason:
      "New heroes are a work in progress and they could be unbalanced when released.",
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
];
