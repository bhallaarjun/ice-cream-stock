const RemoveBtn = ({ iceCream, onRemoveOne }) => {
  const handleClick = () => {
    onRemoveOne(iceCream);
  };
  return (
    <>
      <button onClick={handleClick}>-</button>
    </>
  );
};
export default RemoveBtn;
