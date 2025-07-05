//
import { useState, useEffect } from "react";

// Provides a search bar and filter checkbox for searching and filtering ice cream stock.
const SearchBar = ({
  searchText,
  inStockOnly,
  onSearchTextChange,
  onInStockOnlyChange,
}) => {
  // Local state to manage the debounced search text
  const [debouncedSearchText, setDebouncedSearchText] = useState(searchText);
  useEffect(() => {
    const handler = setTimeout(() => {
      onSearchTextChange(debouncedSearchText);
    }, 1000);

    // Cleanup function to clear the timeout if the component unmounts
    // or if debouncedSearchText changes before the delay is over
    return () => {
      clearTimeout(handler);
    };
  }, [debouncedSearchText, onSearchTextChange]); // re-run effect when these change
  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="search..."
          value={debouncedSearchText} // input bound to local state
          onChange={(e) => setDebouncedSearchText(e.target.value)}
        />
      </div>
      <div className="stocked">
        <label>
          <input
            type="checkbox"
            value={inStockOnly} // checkbox bound to prop passed from IceCreamStock
            onChange={(e) => onInStockOnlyChange(e.target.checked)}
          />{" "}
          stocked only
        </label>
      </div>
    </>
  );
};
export default SearchBar;
