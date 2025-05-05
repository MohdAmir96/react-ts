import { useState, useEffect } from "react";
import { useDebounce } from "../customHooks/useDebounce";
const SearchInput = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  console.log(debouncedQuery);
  useEffect(() => {
    if (debouncedQuery) {
      // Call API or perform side effect here
      // console.log("Searching for:", debouncedQuery);
    }
  }, [debouncedQuery]);

  return <input value={query} onChange={(e) => setQuery(e.target.value)} />;
};

export default SearchInput;
