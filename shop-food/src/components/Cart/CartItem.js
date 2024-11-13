import { useState } from "react";

function CartItem(props) {
  const { item } = props;
  const { quantityUp, quantityDown } = props;

  const [quantity, setQuantity] = useState(0);

  const handleUp = () => {
    quantityUp();
    setQuantity(quantity + 1);
  };

  const handleDown = () => {
    if (quantity > 0) {
      quantityDown();
      setQuantity(quantity - 1);
    }
  };

  console.log(quantity);
  return (
    <>
      <div className="cart__item">
        <div className="cart__content">
          <h3 className="cart__title">{item.title}</h3>
          <div className="cart__description">{item.description}</div>
          <div className="cart__price">{item.price}</div>
        </div>
        <div className="cart__quantity">
          <button onClick={handleUp}>+</button>
          <div className="cart__total">{quantity}</div>
          <button onClick={handleDown}>-</button>
        </div>
      </div>
    </>
  );
}
export default CartItem;
