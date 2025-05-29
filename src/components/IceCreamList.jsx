import AddBtn from "./AddBtn";
import RemoveBtn from "./RemoveBtn";
import IceCream from "./IceCream";

//Displays a list of ice creams based on the current search and filter criteria.
const IceCreamList = ({ iceCreams, setIceCreams, searchText, inStockOnly }) => {
  const rows = [];
  const handleAddOne = (iceCreamToUpdate) => {
    setIceCreams((prevIceCreams) =>
      prevIceCreams.map((iceCream) =>
        iceCream === iceCreamToUpdate
          ? { ...iceCream, quantity: iceCream.quantity + 1 }
          : iceCream,
      ),
    );
  };
  const handleRemoveOne = (iceCreamToUpdate) => {
    setIceCreams((prevIceCreams) =>
      prevIceCreams.map((iceCream) =>
        iceCream === iceCreamToUpdate && iceCream.quantity > 0
          ? { ...iceCream, quantity: iceCream.quantity - 1 }
          : iceCream,
      ),
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
    if (inStockOnly && !iceCream.stocked) {
      return;
    }

    // Add the filtered ice cream item to the rows array
    rows.push(
      <div className="ice-cream-item">
        <IceCream
          iceCream={iceCream}
          key={iceCream.brand + iceCream.flavour + iceCream.category}
        />
        <AddBtn
          iceCream={iceCream}
          onAddOne={handleAddOne}
        />
        <RemoveBtn
          iceCream={iceCream}
          onRemoveOne={handleRemoveOne}
        />
      </div>,
    );
  });

  return <>{rows}</>;
};
export default IceCreamList;
