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
        style={{
          borderRadius: "8px",
          border: "1px solid #FC9D1F",
          background: "#F2F2F2",
          width: "80%",
          padding: "8px",
          outline: "none",
          boxShadow: "none",
        }}
        placeholder={`Search ${page.title} rules...`}
        value={query}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
