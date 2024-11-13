function CartMini({ quantity }) {
  return (
    <>
      <div className="myCart">
        <div className="myCart__user">My Cart </div>
        <div className="myCart__totalQuantity">{quantity}</div>
      </div>
    </>
  );
}

export default CartMini;
