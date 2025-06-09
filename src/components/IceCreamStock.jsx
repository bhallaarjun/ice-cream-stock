import { useState, useEffect } from "react";
import IceCreamList from "./IceCreamList";
import SearchBar from "./SearchBar";
import AddIceCream from "./AddIceCream";

const IceCreamStock = () => {
  const [searchText, setSearchText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [iceCreams, setIceCreams] = useState([]);

  // Mock function simulating feching data from server
  const fetchIceCreams = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            category: "420ML Tub",
            quantity: 4,
            brand: "Haagen-Dazs",
            flavour: "Mint Chocolate",
            stocked: false,
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
            quantity: 0,
            brand: "Haagen-Dazs",
            flavour: "Macadamia Nut Brittle",
            stocked: true,
          },
          {
            category: "420ML Tub",
            quantity: 0, // out of stock item
            brand: "Haagen-Dazs",
            flavour: "Dulce de Leche",
            stocked: true,
          },
          {
            category: "420ML Tub",
            quantity: 0, // out of stock item
            brand: "Haagen-Dazs",
            flavour: "Red Velvet",
            stocked: true,
          },
          {
            category: "420ML Tub",
            quantity: 0, // out of stock item
            brand: "Haagen-Dazs",
            flavour: "Strawberries & Cream",
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
            quantity: 4,
            brand: "Jude's",
            flavour: "Cherries & Cream",
            stocked: true,
          },
          {
            category: "460ML Tub",
            quantity: 0, // out of stock item
            brand: "Jude's",
            flavour: "Mint Chocolate",
            stocked: true,
          },
          {
            category: "460ML Tub",
            quantity: 1,
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
        ]);
      }, 3000); // simulate a delay
    });
  };

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    const getIceCreams = async () => {
      const data = await fetchIceCreams();
      setIceCreams(data);
      // console.log("geticecreams");
    };
    getIceCreams();
  }, []); // Empty dependency array to ensure this runs only once

  // Function to handle adding a new ice cream to the stock when the
  // 'new entry' button is clicked
  const handleAddIceCream = (newIceCream) => {
    setIceCreams([...iceCreams, newIceCream]);
  };
  // The main container component that renders the child components
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
        setIceCreams={setIceCreams}
        searchText={searchText}
        inStockOnly={inStockOnly}
      />
    </>
  );
};
export default IceCreamStock;
