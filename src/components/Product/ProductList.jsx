import React, { useEffect, useState } from "react";
import ProductListItem from "./ProductListItem";
import styled from "styled-components";
import getProductList from "../../api/getProductList";

const Container = styled.div`
  padding: 0 30px;
`;

const ListUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 100px;
  max-width: 1500px;
  margin: 0 auto;
  @media screen and (max-width: 820px) {
    padding: 100px 0 50px;
  }
`;

const ProductList = ({ setOpen }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductList();
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <Container>
      {
        <ListUl>
          {products &&
            products.map((item) => (
              <ProductListItem key={item.id} item={item} setOpen={setOpen}>
                {item.name}
              </ProductListItem>
            ))}
        </ListUl>
      }
    </Container>
  );
};

export default ProductList;
