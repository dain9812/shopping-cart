import React from "react";
import styled from "styled-components";

const Item = styled.li`
  position: relative;
  padding: 20px;
  border-bottom: 1px solid #ccc;
  &:last-child {
    border: none;
  }
`;

const Goods = styled.div`
  padding-top: 14px;
  display: flex;
  align-items: center;
`;

const Price = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
`;

const Selling = styled.span`
  font-weight: bold;
`;

const CountWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Count = styled.input.attrs({ type: "number" })`
  font-size: 16px;
  border: none;
  text-align: right;
  width: 30px;
  font-weight: bold;
`;

const Button = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  width: 30px;
`;

const DeleteButton = styled(Button)`
  position: absolute;
  top: 17px;
  right: 10px;
  color: #aaa;
`;

const CartListItem = ({ item }) => {
  return (
    <>
      <Item>
        <p>{item.name}</p>
        <Goods>
          <span style={{ fontSize: "50px" }}>{item.product}</span>
          <Price>
            <Selling>{item.price}</Selling>
            <CountWrap>
              <Button>−</Button>
              <Count value={item.count} readOnly />
              <Button>+</Button>
            </CountWrap>
          </Price>
        </Goods>
        <DeleteButton>✕</DeleteButton>
      </Item>
    </>
  );
};

export default CartListItem;
