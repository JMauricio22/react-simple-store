import React, { useContext } from "react";
import OrderItem from "../components/OrderItem";
import "../styles/MyOrder.scss";
import AppContext from "@context/AppContext";
import arrowIcon from "@icons/flechita.svg";

const MyOrder = ({ closeMyOrder }) => {
  const { state } = useContext(AppContext);

  const calculateTotal = () => {
    const reducer = (acc, item) => acc + item.price;
    const total = state.cart.reduce(reducer, 0);
    return total;
  };

  return (
    <aside className='MyOrder'>
      <div className='title-container cursor-pointer'>
        <img src={arrowIcon} alt='arrow' onClick={closeMyOrder} />
        <p className='title'>My order</p>
      </div>
      <div className='my-order-content'>
        <div className='my-order-item-container'>
          {state.cart.map((product) => (
            <OrderItem product={product} key={`orderItem-${product.id}`} />
          ))}
        </div>
        <div className='order'>
          <p>
            <span>Total</span>
          </p>
          <p>${calculateTotal()}</p>
        </div>
        <button className='primary-button'>Checkout</button>
      </div>
    </aside>
  );
};

export default MyOrder;
