import React from "react";
import styled from "styled-components";

const Container = styled.nav`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  height: 80px;
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

const Nav = ({ setOpen }) => {
  return (
    <Container>
      <Inner>
        <Logo>Menu</Logo>
        <Button onClick={() => setOpen(true)}>🛒</Button>
      </Inner>
    </Container>
  );
};

export default Nav;
