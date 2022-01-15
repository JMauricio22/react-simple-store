import { useState } from "react";

const initialState = {
  cart: [],
};

export default function useInitialState() {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    if (!state.cart.includes(payload)) {
      setState({
        ...state,
        cart: [...state.cart, payload],
      });
    }
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((item) => item.id !== payload.id),
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
  };
}
