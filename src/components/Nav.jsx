import React from "react";
import styled from "styled-components";

const Container = styled.nav`
  position: fixed;
  left: 0;
  right: 0;
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const Logo = styled.h1`
  font-size: 30px;
`;

const Button = styled.button`
  background: none;
  border: none;
  font-size: 35px;
  cursor: pointer;
`;

const Nav = () => {
  return (
    <Container>
      <Inner>
        <Logo>Shop</Logo>
        <Button>🛒</Button>
      </Inner>
    </Container>
  );
};

export default Nav;
