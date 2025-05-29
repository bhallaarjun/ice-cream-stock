const AddBtn = ({ iceCream, onAddOne }) => {
  const handleClick = () => {
    onAddOne(iceCream);
  };

  return (
    <>
      <button onClick={handleClick}>+</button>
    </>
  );
};
export default AddBtn;
