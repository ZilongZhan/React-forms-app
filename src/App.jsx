import { PersonsList, Form, Filter } from "./components";
import { persons as originalPersons } from "./data";
import {
  usePersons,
  usePersonName,
  usePersonNumber,
  useSearchPerson,
} from "./hooks";

const App = () => {
  const { searchInput, handleSearchPerson } = useSearchPerson("");
  const { personName, handleUpdatePersonName } = usePersonName("");
  const { personNumber, handleUpdatePersonNumber } = usePersonNumber("");
  const { persons, handleUpdatePersons } = usePersons(
    originalPersons,
    searchInput
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Form
        handleUpdatePersonName={handleUpdatePersonName}
        handleUpdatePersonNumber={handleUpdatePersonNumber}
        handleUpdatePersons={handleUpdatePersons}
        personName={personName}
        personNumber={personNumber}
      />
      <h2>Numbers</h2>
      <Filter handleSearchPerson={handleSearchPerson} />
      <PersonsList persons={persons} />
    </div>
  );
};

export default App;
