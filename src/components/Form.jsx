import { InputField } from "./InputField";

export const Form = ({
  handleUpdatePersonName,
  handleUpdatePersonNumber,
  handleUpdatePersons,
  personName,
  personNumber,
}) => {
  const addNewPerson = (event) => {
    event.preventDefault();

    const newPerson = {
      id: Date.now(),
      name: personName,
      number: personNumber,
    };

    handleUpdatePersons(newPerson);
    handleUpdatePersonName("");
    handleUpdatePersonNumber("");
  };

  const handleChangeNewPersonName = (event) => {
    const { target } = event;
    handleUpdatePersonName(target.value);
  };

  const handleChangeNewPersonNumber = (event) => {
    const { target } = event;
    handleUpdatePersonNumber(target.value);
  };

  return (
    <form onSubmit={addNewPerson}>
      <InputField
        label="name"
        type="text"
        value={personName}
        handler={handleChangeNewPersonName}
      />
      <InputField
        label="number"
        type="number"
        value={personNumber}
        handler={handleChangeNewPersonNumber}
      />
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
