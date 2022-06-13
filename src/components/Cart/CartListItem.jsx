import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addItem, clearItem, removeItem } from "../../store/cartSlice";

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
  text-align: center;
  width: 30px;
  font-weight: bold;
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  width: 30px;
  cursor: ${(props) => (props.disabled ? "" : "pointer")};
`;

const DeleteButton = styled(Button)`
  position: absolute;
  top: 17px;
  right: 10px;
  color: #aaa;
`;

const CartListItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddItem = useCallback(() => {
    dispatch(addItem(item));
  }, [dispatch, item]);

  const handleRemoveItem = useCallback(() => {
    dispatch(removeItem(item));
  }, [dispatch, item]);

  const handleClearItem = useCallback(() => {
    dispatch(clearItem(item));
  }, [dispatch, item]);

  return (
    <>
      <Item>
        <p>{item.name}</p>
        <Goods>
          <span style={{ fontSize: "50px" }}>{item.product}</span>
          <Price>
            <Selling>{item.price}</Selling>
            <CountWrap>
              <Button
                onClick={handleRemoveItem}
                disabled={item.count === 1 ? true : false}
              >
                −
              </Button>
              <Count value={item.count} readOnly />
              <Button onClick={handleAddItem}>+</Button>
            </CountWrap>
          </Price>
        </Goods>
        <DeleteButton onClick={handleClearItem}>✕</DeleteButton>
      </Item>
    </>
  );
};

export default CartListItem;
