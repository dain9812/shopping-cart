import React, { useEffect, useState } from "react";
import ProductListItem from "./ProductListItem";
import styled from "styled-components";

const list = [
  {
    id: 1,
    product: "🍎",
    name: "사과",
    price: 3000,
  },
  {
    id: 2,
    product: "🍌",
    name: "바나나",
    price: 1000,
  },
  {
    id: 3,
    product: "🥖",
    name: "바게트",
    price: 4000,
  },
  {
    id: 4,
    product: "🧇",
    name: "와플",
    price: 3000,
  },
  {
    id: 5,
    product: "🍕",
    name: "피자",
    price: 3500,
  },
  {
    id: 6,
    product: "🍩",
    name: "도넛",
    price: 1500,
  },
  {
    id: 7,
    product: "🥛",
    name: "우유",
    price: 2000,
  },
  {
    id: 8,
    product: "☕️",
    name: "뜨아",
    price: 2000,
  },
];

const Container = styled.div`
  padding: 0 30px;
`;

const ListUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-top: 100px;
`;

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(list);
  }, []);

  return (
    <Container>
      {
        <ListUl>
          {products &&
            products.map((item) => (
              <ProductListItem key={item.id} item={item}>
                {item.name}
              </ProductListItem>
            ))}
        </ListUl>
      }
    </Container>
  );
};

export default ProductList;
