import { useState } from "react";
import { useDebouncedCallback } from "../../../utils/useDebouncedCallback.ts";
import "./style/SearchBar.css";

export const SearchBar = ({
  pageTitle,
  handleQuery,
}: {
  pageTitle: string;
  handleQuery: (result: string) => void;
}) => {
  const [query, setQuery] = useState("");
  const debouncedCallback = useDebouncedCallback(handleQuery, 200);

  const handleChange = (val: string) => {
    setQuery(val);
    debouncedCallback(val);
  };

  return (
    <div className="searchBarContainer">
      <input
        className="searchBarInput"
        placeholder={`Search ${pageTitle} rules...`}
        value={query}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
