import { useState } from "react";

export const useSearchInput = (initialValue) => {
  const [searchInput, setSearchInput] = useState(initialValue);

  const handleSearchInput = (searchValue) => {
    setSearchInput(searchValue);
  };

  return {
    searchInput,
    handleSearchInput,
  };
};
