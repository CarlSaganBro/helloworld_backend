import { BaseRulesPage } from "./BaseRulesPage.tsx";
import {
  TOURNAMENT_PAGE,
  TournamentRulesContent,
} from "../utils/pageContent.tsx";
import { ExpandableItem } from "./ExpandableItem.tsx";
import { SearchBar } from "./SearchBar.tsx";
import { useState } from "react";

export const TournamentRules = ({}) => {
  const [query, setQuery] = useState("");

  return (
    <BaseRulesPage>
      <>
        <SearchBar
          page={TOURNAMENT_PAGE}
          handleQuery={(result) => setQuery(result)}
        />
        <div>
          <ol>
            {TournamentRulesContent.map((rule, i) => (
              <ExpandableItem
                key={`tournament-rule-${i}`}
                rule={rule}
                query={query}
              />
            ))}
          </ol>
        </div>
      </>
    </BaseRulesPage>
  );
};
