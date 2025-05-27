const IceCream = ({ iceCream }) => {
  return (
    <>
      <h4>
        {iceCream.brand} {iceCream.flavour}
      </h4>
      <p>
        {iceCream.category} x {iceCream.quantity}
      </p>
    </>
  );
};
export default IceCream;
