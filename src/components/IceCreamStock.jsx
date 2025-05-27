import { useState } from "react";
import IceCreamList from "./IceCreamList";
import SearchBar from "./SearchBar";
import AddIceCream from "./AddIceCream";

const IceCreamStock = () => {
  const [searchText, setSearchText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [iceCreams, setIceCreams] = useState([
    {
      category: "420ML Tub",
      quantity: 3,
      brand: "Haagen-Dazs",
      flavour: "Mint Chocolate",
      stocked: true,
    },
    {
      category: "420ML Tub",
      quantity: 1,
      brand: "Haagen-Dazs",
      flavour: "Lotus Biscoff Biscuit",
      stocked: true,
    },
    {
      category: "420ML Tub",
      quantity: 1,
      brand: "Haagen-Dazs",
      flavour: "Coffee",
      stocked: true,
    },
    {
      category: "420ML Tub",
      quantity: 1,
      brand: "Haagen-Dazs",
      flavour: "Macadamia Nut Brittle",
      stocked: true,
    },
    {
      category: "420ML Tub",
      quantity: 1,
      brand: "Haagen-Dazs",
      flavour: "Dulce de Leche",
      stocked: true,
    },
    {
      category: "420ML Tub",
      quantity: 1,
      brand: "Haagen-Dazs",
      flavour: "Red Velvet",
      stocked: true,
    },
    {
      category: "420ML Tub",
      quantity: 1,
      brand: "Haagen-Dazs",
      flavour: "Strawberries & Cream",
      stocked: true,
    },
    {
      category: "420ML Tub",
      quantity: 1,
      brand: "Haagen-Dazs",
      flavour: "Coffee",
      stocked: true,
    },
    {
      category: "460ML Tub",
      quantity: 2,
      brand: "Jude's",
      flavour: "Blood Orange",
      stocked: true,
    },
    {
      category: "460ML Tub",
      quantity: 1,
      brand: "Jude's",
      flavour: "Belgian Chocolate",
      stocked: true,
    },
    {
      category: "460ML Tub",
      quantity: 2,
      brand: "Grom",
      flavour: "Pistachio",
      stocked: true,
    },
    {
      category: "100ML Stick",
      quantity: 6,
      brand: "Magnum",
      flavour: "Dark Chocolate",
      stocked: true,
    },
    {
      category: "1L Tub",
      quantity: 1,
      brand: "M&S",
      flavour: "Cornish Vanilla",
      stocked: true,
    },
    {
      category: "2L Tub",
      quantity: 1,
      brand: "M&S",
      flavour: "Cornish Vanilla",
      stocked: true,
    },
    {
      category: "2L Tub",
      quantity: 0,
      brand: "M&S",
      flavour: "Chocolate",
      stocked: false,
    },
  ]);
  const handleAddIceCream = (newIceCream) => {
    setIceCreams([...iceCreams, newIceCream]);
  };
  return (
    <>
      <div className="header">
        <h1>Ice Cream Stock</h1>
      </div>
      <div className="filter">
        <SearchBar
          searchText={searchText}
          inStockOnly={inStockOnly}
          onSearchTextChange={setSearchText}
          onInStockOnlyChange={setInStockOnly}
        />
        <AddIceCream onAdd={handleAddIceCream} />
      </div>
      <IceCreamList
        iceCreams={iceCreams}
        searchText={searchText}
        inStockOnly={inStockOnly}
      />
    </>
  );
};
export default IceCreamStock;
