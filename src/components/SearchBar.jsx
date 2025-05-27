const SearchBar = ({
  searchText,
  inStockOnly,
  onSearchTextChange,
  onInStockOnlyChange,
}) => {
  return (
    <>
      <div classNam="search">
        <input
          type="text"
          placeholder="search..."
          value={searchText}
          onChange={(e) => onSearchTextChange(e.target.value)}
        />
      </div>
      <div className="stocked">
        <label>
          <input
            type="checkbox"
            value={inStockOnly}
            onChange={(e) => onInStockOnlyChange(e.target.value)}
          />{" "}
          stocked only
        </label>
      </div>
    </>
  );
};
export default SearchBar;
