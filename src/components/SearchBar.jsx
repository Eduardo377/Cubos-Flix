const SearchBar = ({ value, onChange, onKeyDown }) => {
  return (
    <input
      className="input"
      type="text"
      placeholder="Pesquisar..."
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

export default SearchBar;