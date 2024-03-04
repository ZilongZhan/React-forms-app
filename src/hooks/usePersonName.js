import { useState } from "react";

export const usePersonName = (initialValue) => {
  const [personName, setPersonName] = useState(initialValue);

  const handleUpdatePersonName = (currentPersonName) => {
    setPersonName(currentPersonName);
  };

  return { personName, handleUpdatePersonName };
};
