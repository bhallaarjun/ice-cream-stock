const AddBtn = ({ iceCream, onAddOne }) => {
  const handleClick = () => {
    onAddOne(iceCream);
  };

  return (
    <>
      {/* <button onClick={handleClick}>&#43;</button> */}
      <button onClick={handleClick}>&#x2795;</button>
    </>
  );
};
export default AddBtn;
