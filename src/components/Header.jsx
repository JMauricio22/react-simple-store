import React, { useState, useContext } from "react";
import Menu from "@components/Menu";
import "@styles/Header.scss";
import menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import shoppingCart from "@icons/icon_shopping_cart.svg";
import AppContext from "@context/AppContext";
import MyOrder from "@containers/MyOrder";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleToggleMobielMenu = () => {
    setToggleMobileMenu(!toggleMobileMenu);
  };

  return (
    <nav>
      <img
        src={menu}
        alt='menu'
        className='menu cursor-pointer'
        onClick={handleToggleMobielMenu}
      />
      <div className='navbar-left'>
        <img src={logo} alt='logo' className='nav-logo cursor-pointer' />
        <ul>
          <li>
            <a href='/'>All</a>
          </li>
          <li>
            <a href='/'>Clothes</a>
          </li>
          <li>
            <a href='/'>Electronics</a>
          </li>
          <li>
            <a href='/'>Furnitures</a>
          </li>
          <li>
            <a href='/'>Toys</a>
          </li>
          <li>
            <a href='/'>Others</a>
          </li>
        </ul>
      </div>
      <div className='navbar-right'>
        <ul>
          <li className='navbar-email cursor-pointer' onClick={handleToggle}>
            platzi@example.com
          </li>
          <li
            className='navbar-shopping-cart'
            onClick={() => setToggleOrders(!toggleOrders)}
          >
            <img
              src={shoppingCart}
              alt='shopping cart'
              className='cursor-pointer'
            />
            {state.cart.length > 0 ? <div> {state.cart.length} </div> : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder closeMyOrder={() => setToggleOrders(false)} />}
      {toggleMobileMenu && (
        <MobileMenu handleToggleMobielMenu={handleToggleMobielMenu} />
      )}
      {}
    </nav>
  );
};

export default Header;
