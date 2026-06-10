import { BaseRulesPage } from "./BaseRulesPage.tsx";
import { TournamentRulesContent } from "../assets/pageContent.ts";
import { ExpandableItem } from "./ExpandableItem.tsx";
import { SearchBar } from "./SearchBar.tsx";
import { RULES_PAGES } from "../utils/pageMetadata.ts";
import { useState } from "react";

export const TournamentRules = ({}) => {
  const [query, setQuery] = useState("");

  return (
    <BaseRulesPage>
      <>
        <SearchBar
          page={RULES_PAGES.TOURNAMENT}
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
