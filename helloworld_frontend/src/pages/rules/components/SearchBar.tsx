import { useState } from "react";
import type { PageDefinition } from "../types/types.tsx";
import { useDebouncedCallback } from "../../../utils/useDebouncedCallback.ts";

export const SearchBar = ({
  page,
  handleQuery,
}: {
  page: PageDefinition;
  handleQuery: (result: string) => void;
}) => {
  const [query, setQuery] = useState("");
  const debouncedCallback = useDebouncedCallback(handleQuery, 200);

  const handleChange = (val: string) => {
    setQuery(val); // immediate UI update
    debouncedCallback(val); // delayed parent update
  };

  return (
    <div>
      <input
        placeholder={`Search ${page.title}...`}
        value={query}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
