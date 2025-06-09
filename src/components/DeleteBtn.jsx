const DeleteBtn = ({ iceCream, onDeleteOne }) => {
  const handleClick = () => {
    onDeleteOne(iceCream);
  };

  return (
    <>
      <button
        className="del"
        onClick={handleClick}
      >
        &#128465;
      </button>
    </>
  );
};
export default DeleteBtn;
