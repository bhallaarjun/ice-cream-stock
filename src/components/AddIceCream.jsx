import { useState } from "react";

const AddIceCream = ({ onAdd }) => {
  const [showForm, setShowForm] = useState(false);
  const [brand, setBrand] = useState("");
  const [flavour, setFlavour] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleAddClick = () => {
    setShowForm(true);
  };

  const handleNewEntry = (e) => {
    e.preventDefault();
    if (brand === "") {
      alert("Please enter a valid brand");
      return;
    } else if (flavour === "") {
      alert("Please enter a valid flavour");
      return;
    } else if (category === "") {
      alert("Please enter a valid category");
      return;
    } else if (quantity === "") {
      alert("Please enter a valid quantity");
      return;
    } else {
      const newIceCream = {
        brand,
        flavour,
        category,
        quantity: Number(quantity),
        stocked: quantity > 0,
      };
      onAdd(newIceCream);
      setShowForm(false);
      setBrand("");
      setFlavour("");
      setCategory("");
      setQuantity("");
    }
  };
  return (
    <>
      <div className="new-entry">
        <button onClick={handleAddClick}>NEW ENTRY</button>
      </div>
      {showForm && (
        <div className="overlay">
          <form onSubmit={handleNewEntry}>
            <input
              type="text"
              placeholder="brand..."
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
            <input
              type="text"
              placeholder="flavour..."
              value={flavour}
              onChange={(e) => setFlavour(e.target.value)}
            />
            <input
              type="text"
              placeholder="category..."
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <input
              type="number"
              placeholder="quantity..."
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button type="submit">Add</button>
            <button onClick={() => setShowForm(false)}>Cancel</button>
          </form>
        </div>
      )}
    </>
  );
};
export default AddIceCream;
