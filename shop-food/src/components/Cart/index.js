import { useState } from "react";
import CartItem from "./CartItem";
import "./Cart.scss";
const init = [
  {
    id: 1,
    title: "Bami King - Bánh Mì Bò Nướng & Cơm Thố - An Trạch",
    description: "Bánh mì giòn , ngon, dẻo , cơm ngon đủ vị. ",
    price: "20.5$",
  },
  {
    id: 2,
    title: "Nam An - Cơm gà Hội An - Láng Hạ",
    description: "Bò mềm quyện vị, trứng lòng đào ngon ngậy.",
    price: "15.5$",
  },
  {
    id: 3,
    title: "Bánh Cuốn Nóng Gia Truyền - Đội Cấn",
    description: "Bánh cuốn nóng hổi, vừa thổi vừa ngon.",
    price: "9.99$",
  },
  {
    id: 4,
    title: "CƠM VĂN ĐÔ - CƠM VĂN PHÒNG - TỰ CHỌN - GIÁ BÌNH DÂN - NGỌC KHÁNH",
    description: "Cơm ngon đậm vị văn phòng , giá rẻ bình dân cho mọi người.",
    price: "30$",
  },
  {
    id: 5,
    title: "CÀ PHÊ MUỐI CHÚ LONG - Tôn Đức Thắng",
    description:
      "Cafe đậm đà, đậm hương vị bản chất làm lên thương hiệu của chú Long.",
    price: "19.25$",
  },
];

function Cart(props) {
  const [data] = useState(init);
  const { quantityUp, quantityDown } = props;

  // console.log(data);
  return (
    <>
      <div className="cart">
        <div className="cart__blockNote">
          <h2 className="cart__titleMain">Delicious Food, Delivered To You</h2>
          <div className="cart__content">
            Officia do occaecat Lorem cillum adipisicing deserunt esse sunt
            dolore excepteur. Occaecat labore labore occaecat irure sint aute
            elit ex id. Minim culpa eu qui occaecat enim ex esse minim
            exercitation veniam officia nostrud. Ipsum ad fugiat occaecat
            cupidatat ut irure excepteur proident incididunt.
          </div>
        </div>
        {data && (
          <div className="cart__list">
            {data.map((item) => (
              <CartItem
                item={item}
                key={item.id}
                quantityUp={quantityUp}
                quantityDown={quantityDown}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
export default Cart;
