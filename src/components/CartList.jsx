import React from "react";
import styled from "styled-components";

const Cart = styled.div`
  position: fixed;
  right: -100%;
  top: 0;
  bottom: 0;
  background: #fff;
  z-index: 2;
  width: 30%;
  min-width: 300px;
  &.open {
    right: 0;
  }
`;

const CartList = ({ open }) => {
  return <Cart className={open ? "open" : ""}>CartList</Cart>;
};

export default CartList;
