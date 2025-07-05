const DeleteBtn = ({ iceCream, onDeleteOne }) => {
  const handleClick = () => {
    const response = confirm(
      `Deleting ${iceCream.brand} ${iceCream.flavour} ice cream from the list. Continue?`,
    );
    if (response) {
      onDeleteOne(iceCream);
    }
  };

  return <button onClick={handleClick}>&#128465;</button>;
};
export default DeleteBtn;
