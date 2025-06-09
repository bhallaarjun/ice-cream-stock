const RemoveBtn = ({ iceCream, onRemoveOne }) => {
  const handleClick = () => {
    onRemoveOne(iceCream);
  };
  return (
    <>
      {/* <button onClick={handleClick}>&#8722;</button> */}
      <button onClick={handleClick}>&#x2796;</button>
    </>
  );
};
export default RemoveBtn;
