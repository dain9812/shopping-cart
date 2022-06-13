import React from "react";
import styled from "styled-components";
import CartListItem from "./CartListItem";

const Cart = styled.div`
  position: fixed;
  right: -100%;
  top: 0;
  bottom: 0;
  background: #fff;
  z-index: 2;
  width: 30%;
  min-width: 300px;
  padding-top: 30px;
  transition: right 0.5s;
  &.open {
    right: 0;
  }
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  position: fixed;
  top: 20px;
  right: -100%;
  font-size: 28px;
  color: #777;
  cursor: pointer;
  transition: right 0.5s;
  &.open {
    right: 20px;
  }
`;

const Inner = styled.div`
  padding: 0 20px;
`;

const Title = styled.h3`
  font-size: 30px;
`;

const ListUl = styled.ul`
  padding: 30px 0;
`;

const CartList = ({ open, setOpen }) => {
  return (
    <Cart className={open ? "open" : ""}>
      <CloseBtn className={open ? "open" : ""} onClick={() => setOpen(false)}>
        ✕
      </CloseBtn>
      <Inner>
        <Title>Cart</Title>
        <ListUl>
          <CartListItem />
        </ListUl>
      </Inner>
    </Cart>
  );
};

export default CartList;
