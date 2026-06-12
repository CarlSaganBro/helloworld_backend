import { useState } from "react";
import { SearchBar } from "./SearchBar.tsx";
import { RuleItem } from "./RuleItem.tsx";
import type { RulesPageDefinition } from "../types/types.tsx";

export const RulesPage = ({
  pageDefinition,
}: {
  pageDefinition: RulesPageDefinition;
}) => {
  const [query, setQuery] = useState("");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "75vw",
      }}
    >
      <SearchBar
        pageTitle={pageDefinition.title}
        handleQuery={(result) => setQuery(result)}
      />
      <div>
        <ol>
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
