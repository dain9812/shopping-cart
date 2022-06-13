import React from "react";
import styled from "styled-components";

const Item = styled.li`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  box-sizing: border-box;
  cursor: pointer;
  padding: 20px 0;
  &:hover {
    background: #eee;
  }
`;

const Name = styled.span`
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 20px;
`;

const Product = styled.span`
  font-size: 30px;
  padding-bottom: 20px;
`;

const Price = styled.span`
  font-size: 17px;
  padding-bottom: 10px;
`;

const Button = styled.button`
  cursor: pointer;
  background: #eee;
  border: 1px solid #aaa;
  padding: 10px 20px;
  border-radius: 5px;
`;

const ProductListItem = ({ item }) => {
  return (
    <Item>
      <Name>{item.name}</Name>
      <Product>{item.product}</Product>
      <Price>{item.price}</Price>
      <Button>카트에 담기</Button>
    </Item>
  );
};

export default ProductListItem;
