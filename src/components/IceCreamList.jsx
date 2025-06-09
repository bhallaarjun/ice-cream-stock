import AddBtn from "./AddBtn";
import RemoveBtn from "./RemoveBtn";
import IceCream from "./IceCream";
import DeleteBtn from "./DeleteBtn";

// Displays a list of ice creams based on the current search and filter criteria.
const IceCreamList = ({ iceCreams, setIceCreams, searchText, inStockOnly }) => {
  const rows = [];

  // Function to handle adding one more of a specific ice cream
  const handleAddOne = (iceCreamToUpdate) => {
    setIceCreams((prevIceCreams) =>
      prevIceCreams.map((iceCream) =>
        iceCream === iceCreamToUpdate
          ? { ...iceCream, quantity: iceCream.quantity + 1 }
          : iceCream,
      ),
    );
  };

  // Function to handle removing one of a specific ice cream
  const handleRemoveOne = (iceCreamToUpdate) => {
    setIceCreams((prevIceCreams) =>
      prevIceCreams.map((iceCream) =>
        iceCream === iceCreamToUpdate && iceCream.quantity > 0
          ? { ...iceCream, quantity: iceCream.quantity - 1 }
          : iceCream,
      ),
    );
  };

  // Function to handle deleting a specific ice cream
  const handleDeleteOne = (iceCreamToDelete) => {
    setIceCreams((prevIceCreams) =>
      prevIceCreams.filter((iceCream) => iceCream !== iceCreamToDelete),
    );
  };

  iceCreams.forEach((iceCream) => {
    // Check if the ice cream matches the search text in any of its properties
    if (
      !iceCream.brand.toLowerCase().includes(searchText.toLowerCase()) &&
      !iceCream.flavour.toLowerCase().includes(searchText.toLowerCase()) &&
      !iceCream.category.toLowerCase().includes(searchText.toLowerCase())
    ) {
      return; // Skip this item if it doesn't match the search text
    }
    // If the "inStockOnly" filter is enabled, skip items that are not in stock
    if (inStockOnly && iceCream.quantity === 0) {
      return;
    }

    // Add the filtered ice cream item to the rows array
    rows.push(
      <div
        className="ice-cream-item"
        key={iceCream.brand + iceCream.flavour + iceCream.category}
      >
        <IceCream iceCream={iceCream} />
        <div className="buttons">
          <AddBtn
            iceCream={iceCream}
            onAddOne={handleAddOne}
          />
          <RemoveBtn
            iceCream={iceCream}
            onRemoveOne={handleRemoveOne}
          />
          <DeleteBtn
            iceCream={iceCream}
            onDeleteOne={handleDeleteOne}
          />
        </div>
      </div>,
    );
  });

  return <>{rows}</>;
};
export default IceCreamList;
