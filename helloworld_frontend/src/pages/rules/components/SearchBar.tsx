import { useState } from "react";
// import Fuse from "fuse.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { searchIndex, type SearchIndexItem } from "../utils/searchIndex.ts";
import type { PageDefinition } from "../types/types.ts";

export const SearchBar = ({
  page,
  handleQuery,
}: {
  page: PageDefinition;
  handleQuery: (result: string) => void;
}) => {
  const [query, setQuery] = useState("");

  // const fuse = new Fuse(searchIndex, {
  //   keys: ["content"],
  //   threshold: 0.3,
  //   includeMatches: true,
  // });

  // const results = query ? fuse.search(query).map((r) => r.item) : [];

  return (
    <div>
      <input
        placeholder={`Search ${page.title}...`}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <FontAwesomeIcon icon={faSearch} onClick={() => handleQuery(query)} />
    </div>
  );
};
