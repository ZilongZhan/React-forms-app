import { useState } from "react";

export const usePersonNumber = (initialValue) => {
  const [personNumber, setPersonNumber] = useState(initialValue);

  const handleUpdatePersonNumber = (currentPersonNumber) => {
    setPersonNumber(currentPersonNumber);
  };

  return { personNumber, handleUpdatePersonNumber };
};
