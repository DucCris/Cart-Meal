import { useState } from "react";
import Cart from "../Cart";
import CartMini from "../CartMini";
import "./LayoutDefault.scss";

function LayoutDefault() {
  const [quantity, setQuantity] = useState(0);
  // const newQuantity = [...quantity];\
  const quantityUp = () => {
    setQuantity(quantity + 1);
  };
  const quantityDown = () => {
    setQuantity(quantity - 1);
  };
  return (
    <>
      <div className="layout">
        <header className="layout__header">
          <div className="layout__logo">ReactMeals</div>

          <CartMini quantity={quantity} />
        </header>
        <div className="layout__image">
          <img src={require(`../img/bgfood.jpg`)} alt="background__food" />
        </div>

        <main className="layout__main">
          <Cart quantityUp={quantityUp} quantityDown={quantityDown} />
        </main>

        <footer className="layout__footer">
          CopyRight @QuanBunDucCris 2025
        </footer>
      </div>
    </>
  );
}
export default LayoutDefault;
