import { useState } from "react";

export const useSearchPerson = (initialValue) => {
  const [searchInput, setSearchInput] = useState(initialValue);

  const handleSearchPerson = (searchValue) => {
    setSearchInput(searchValue);
  };

  return {
    searchInput,
    handleSearchPerson,
  };
};
