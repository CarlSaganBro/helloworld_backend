import { BaseRulesPage } from "./BaseRulesPage.tsx";
import { SIGNUP_PAGE, SignupsRulesContent } from "../utils/pageContent.tsx";
import { RuleItem } from "./RuleItem.tsx";
import { SearchBar } from "./SearchBar.tsx";
import { useState } from "react";

export const SignupRules = ({}) => {
  const [query, setQuery] = useState("");

  return (
    <BaseRulesPage>
      <>
        <SearchBar
          page={SIGNUP_PAGE}
          handleQuery={(result) => setQuery(result)}
        />
        <div>
          <ol>
            {SignupsRulesContent.map((rule, i) => (
              <RuleItem
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
