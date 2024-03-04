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
      <div>
        name:
        <input
          value={personName}
          onChange={handleChangeNewPersonName}
          required
        />
      </div>
      <div>
        number:
        <input
          value={personNumber}
          onChange={handleChangeNewPersonNumber}
          required
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
