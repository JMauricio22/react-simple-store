import React, { useContext } from "react";
import "../styles/OrderItem.scss";
import closeIcon from "@icons/icon_close.png";
import AppContext from "@context/AppContext";

const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  return (
    <div className='OrderItem'>
      <figure>
        <img src={product.image} alt='item' />
      </figure>
      <p>{product.title} (2)</p>
      <p>${product.price}</p>
      <img
        src={closeIcon}
        alt='close'
        onClick={() => removeFromCart(product)}
        className='cursor-pointer'
      />
    </div>
  );
};

export default OrderItem;
