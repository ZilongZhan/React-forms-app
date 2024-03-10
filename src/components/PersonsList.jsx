import { Person } from "./Person";

export const PersonsList = ({ persons }) => {
  return (
    <ul>
      {persons.map((person) => (
        <Person key={person.id} person={person} />
      ))}
    </ul>
  );
};
