import AddBtn from "./AddBtn";
import RemoveBtn from "./RemoveBtn";
import IceCream from "./IceCream";

const IceCreamList = ({ iceCreams, searchText, inStockOnly }) => {
  const rows = [];
  iceCreams.forEach((iceCream) => {
    if (
      !iceCream.brand.toLowerCase().includes(searchText.toLowerCase()) &&
      !iceCream.flavour.toLowerCase().includes(searchText.toLowerCase()) &&
      !iceCream.category.toLowerCase().includes(searchText.toLowerCase())
    ) {
      return;
    }
    if (inStockOnly && !iceCream.stocked) {
      return;
    }
    rows.push(
      <div className="ice-cream-item">
        <IceCream
          iceCream={iceCream}
          key={iceCream.brand + iceCream.flavour + iceCream.category}
        />
        <AddBtn />
        <RemoveBtn />
      </div>,
    );
  });

  return <>{rows}</>;
};
export default IceCreamList;
