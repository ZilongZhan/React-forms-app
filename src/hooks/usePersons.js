import { useState } from "react";

export const usePersons = (originalPersons, searchInput) => {
  const [persons, setPersons] = useState(originalPersons);

  const handleUpdatePersons = (newPerson) => {
    setPersons([...persons, newPerson]);
  };

  const filteredPersons = (persons, searchInput) => {
    if (searchInput) {
      return persons.filter((person) => person.name.includes(searchInput));
    }

    return persons;
  };

  return {
    persons: filteredPersons(persons, searchInput),
    handleUpdatePersons,
  };
};
