//
const AddBtn = ({ iceCream, onAddOne }) => {
  const handleClick = () => {
    onAddOne(iceCream);
  };

  return <button onClick={handleClick}>&#x2795;</button>;
};
export default AddBtn;
