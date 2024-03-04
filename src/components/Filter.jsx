export const Filter = ({ handleSearchInput }) => {
  const handleChangeSearchInput = (event) => {
    const { target } = event;
    handleSearchInput(target.value);
  };

  return (
    <div>
      search: <input onChange={handleChangeSearchInput} />
    </div>
  );
};
