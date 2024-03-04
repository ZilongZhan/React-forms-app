export const Filter = ({ handleSearchPerson }) => {
  const handleChangeSearchInput = (event) => {
    const { target } = event;
    handleSearchPerson(target.value);
  };

  return (
    <div>
      search: <input onChange={handleChangeSearchInput} />
    </div>
  );
};
