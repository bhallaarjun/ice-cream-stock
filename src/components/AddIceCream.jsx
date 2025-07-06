import { useState } from "react";

// Provides a form for adding new ice cream entries to the stock.
const AddIceCream = ({ onAdd }) => {
  const [showForm, setShowForm] = useState(false);
  const [brand, setBrand] = useState("");
  const [flavour, setFlavour] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");

  // Displays the form for adding a new ice cream entry
  const handleAddClick = () => {
    setShowForm(true);
  };

  // Validates the input fields and calls the onAdd callback with the new ice cream data
  const handleNewEntry = (e) => {
    e.preventDefault();
    if (brand === "") {
      alert("Please enter a valid brand");
      return;
    }
    if (flavour === "") {
      alert("Please enter a valid flavour");
      return;
    }
    if (category === "") {
      alert("Please enter a valid category");
      return;
    }
    if (quantity === "") {
      alert("Please enter a valid quantity");
      return;
    }
    // If input is valid create a new ice cream object
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
  };
  return (
    <>
      <div className="new-entry">
        <button onClick={handleAddClick}>NEW ENTRY</button>
      </div>
      {showForm && (
        <div className="overlay">
          <form
            className="form-overlay"
            onSubmit={handleNewEntry}
          >
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
            <div className="buttons">
              <button type="submit">Add</button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
export default AddIceCream;
