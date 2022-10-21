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
        <Menu onClick={() => navigate('switch')}>Switch</Menu>
        <Menu onClick={() => navigate('DandD')}>Drag&Drop</Menu>
        <Menu onClick={() => navigate('dropList')}>DropList</Menu>
        <Menu onClick={() => navigate('carousel')}>Carousel</Menu>
        <Menu onClick={() => navigate('speech')}>Speech</Menu>
      </MenuContainer>
    </Container>
  );
};

export default Navigation;
