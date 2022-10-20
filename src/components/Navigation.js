import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Menu = styled.div`
  font-size: 20px;
  font-weight: 800;
  padding: 10px;
  cursor: pointer;
  &:hover {
    color: #618bcf;
  }
`;

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <MenuContainer>
        <Menu>Switch</Menu>
        <Menu>Drag&Drop</Menu>
        <Menu>DropList</Menu>
        <Menu>Carousel</Menu>
      </MenuContainer>
    </Container>
  );
};

export default Navigation;
