import { useState } from "react";
import { SearchBar } from "./SearchBar.tsx";
import { RuleItem } from "./RuleItem.tsx";
import type { RulesPageDefinition } from "../types/types.tsx";
import "./style/RulesPage.css";

export const RulesPage = ({
  pageDefinition,
}: {
  pageDefinition: RulesPageDefinition;
}) => {
  const [query, setQuery] = useState("");

  return (
    <div className="rulesPageContainer">
      <SearchBar
        pageTitle={pageDefinition.title}
        handleQuery={(result) => setQuery(result)}
      />
      <div className="rulesListWrapper">
        <ol className="rulesList">
          {pageDefinition.content.map((rule, i) => (
            <RuleItem
              key={`${pageDefinition.path}-${i}`}
              rule={rule}
              query={query}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};
