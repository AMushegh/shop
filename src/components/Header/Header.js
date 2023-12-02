import React from "react";

import "./Header.css";

const Header = ({ cartProducts }) => {
  console.log(cartProducts);
  const count = cartProducts.reduce((acc, { itemCount }) => acc + itemCount, 0);
  return <div className="header">Header {count}</div>;
};

export default Header;
