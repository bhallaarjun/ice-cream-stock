const IceCream = ({ iceCream }) => {
  return (
    <>
      <div className="details">
        <p className="ice-cream">
          {iceCream.brand} {iceCream.flavour}
        </p>
        <p>
          {iceCream.category} x {iceCream.quantity}
        </p>
      </div>
    </>
  );
};
export default IceCream;
