import React, { useContext } from "react";
import ProductItem from "@components/ProductItem";
import "@styles/ProductList.scss";
import useGetProducts from "@hooks/useGetProducts";
import AppContext from "@context/AppContext";

const ProductList = () => {
  const { state } = useContext(AppContext);
  const products = useGetProducts("https://fakestoreapi.com/products");

  const addedProducts = state.cart.reduce((obj, product) => {
    obj[product.id] = product;
    return obj;
  }, {});

  return (
    <section className='main-container'>
      <div className='ProductList'>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            isAdded={addedProducts[product.id]}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
