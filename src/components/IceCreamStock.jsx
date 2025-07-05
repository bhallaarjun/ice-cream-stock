//
import { useState, useEffect } from "react";
import IceCreamList from "./IceCreamList";
import SearchBar from "./SearchBar";
import AddIceCream from "./AddIceCream";
import { iceCreamsFromAPI } from "../api";

const IceCreamStock = () => {
  const [searchText, setSearchText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [iceCreams, setIceCreams] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock function simulating feching data from server
  const fetchIceCreams = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const shouldFail = Math.random() < 0.2; // 20% chance of failure
        if (shouldFail) {
          reject("Failed to fetch ice cream data...");
        } else {
          resolve(iceCreamsFromAPI);
        }
      }, 1000); // simulate a delay
    });
  };

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    let isMounted = true;
    const getIceCreams = async () => {
      setLoading(true);
      try {
        const data = await fetchIceCreams();
        if (isMounted) {
          setIceCreams(data);
        }
      } catch (error) {
        if (isMounted) {
          console.error(error);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };
    getIceCreams();
    return () => {
      isMounted = false;
    };
  }, []);

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
      <div className="content">
        <IceCreamList
          iceCreams={iceCreams}
          setIceCreams={setIceCreams}
          searchText={searchText}
          inStockOnly={inStockOnly}
          loading={loading}
        />
      </div>
    </>
  );
};
export default IceCreamStock;
