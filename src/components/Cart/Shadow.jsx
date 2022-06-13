import React from "react";
import styled from "styled-components";

const BackGround = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  display: none;
  transition: display 0.5s;
  &.open {
    display: block;
  }
`;

const Shadow = ({ open, setOpen }) => {
  return (
    <BackGround className={open ? "open" : ""} onClick={() => setOpen(false)} />
  );
};

export default Shadow;
