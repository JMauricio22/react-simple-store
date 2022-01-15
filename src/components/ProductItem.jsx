import React, { useContext } from "react";
import "../styles/ProductItem.scss";
import AppContext from "@context/AppContext";
import addToCartImage from "@icons/bt_add_to_cart.svg";
import addedToCartImage from "@icons/bt_added_to_cart.svg";

const ProductItem = ({ product, isAdded }) => {
  const { addToCart } = useContext(AppContext);

  const handleClick = () => {
    addToCart(product);
  };

  return (
    <div className='ProductItem'>
      <img src={product.image} alt='' />
      <div className='product-info'>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={handleClick} className='cursor-pointer'>
          <img src={isAdded ? addedToCartImage : addToCartImage} alt='' />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
