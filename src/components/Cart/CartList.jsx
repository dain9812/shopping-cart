import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { calculateTotalPrice } from "../../store/cartSlice";
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

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const CloseButton = styled(Button)`
  position: fixed;
  top: 20px;
  right: -100%;
  font-size: 28px;
  color: #777;
  transition: right 0.5s;
  &.open {
    right: 20px;
  }
`;

const SubmitButton = styled(Button)`
  width: 100%;
  padding: 10px 20px;
  border: 1px solid #aaa;
  border-radius: 5px;
  margin-top: 20px;
  background: #3953ff;
  color: #fff;
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

const Result = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 20px;
  border-top: 8px solid #eee;
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Num = styled.span`
  font-weight: bold;
  font-size: 20px;
`;

const CartList = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const { list, totalPrice } = useSelector((state) => state.cart);
  const [items, setItems] = useState([]);

  const handleSubmit = useCallback(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    setItems(list);
  }, [list]);

  useEffect(() => {
    dispatch(calculateTotalPrice(items));
  }, [dispatch, items]);

  return (
    <Cart className={open ? "open" : ""}>
      <CloseButton
        className={open ? "open" : ""}
        onClick={() => setOpen(false)}
      >
        ✕
      </CloseButton>
      <Inner>
        <Title>Cart</Title>
        <ListUl>
          {items.length > 0
            ? items.map((item) => <CartListItem item={item} key={item.id} />)
            : "카트에 담긴 상품이 없습니다"}
        </ListUl>
        <Result>
          <TotalPrice>
            <span>결제금액</span>
            <span>
              <Num>{totalPrice}</Num> 원
            </span>
          </TotalPrice>
          <SubmitButton onClick={handleSubmit}>결제하기</SubmitButton>
        </Result>
      </Inner>
    </Cart>
  );
};

export default CartList;
