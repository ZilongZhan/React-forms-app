import { PersonsList, Form, Filter, Header } from "./components";
import { persons as originalPersons, heading1, heading2 } from "./data";
import {
  usePersons,
  usePersonName,
  usePersonNumber,
  useSearchInput,
} from "./hooks";

const App = () => {
  const { searchInput, handleSearchInput } = useSearchInput("");
  const { personName, handleUpdatePersonName } = usePersonName("");
  const { personNumber, handleUpdatePersonNumber } = usePersonNumber("");
  const { persons, handleUpdatePersons } = usePersons(
    originalPersons,
    searchInput
  );

  return (
    <div>
      <Header heading={heading1} />
      <Form
        handleUpdatePersons={handleUpdatePersons}
        handleUpdatePersonName={handleUpdatePersonName}
        handleUpdatePersonNumber={handleUpdatePersonNumber}
        personName={personName}
        personNumber={personNumber}
      />
      <Header heading={heading2} />
      <Filter handleSearchInput={handleSearchInput} />
      <PersonsList persons={persons} />
    </div>
  );
};

export default App;
