import React, { useEffect } from 'react';
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
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
  font-family: 'Roboto', sans-serif;
  font-size: 23px;
  font-weight: 800;
  padding: 10px;
  cursor: pointer;
  &:hover {
    color: #618bcf;
  }
`;

const Navigation = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('switch');
    }, 1000);
  }, []);
  return (
    <Container>
      <MenuContainer>
        <Menu onClick={() => navigate('switch')}>Switch</Menu>
        <Menu onClick={() => navigate('DandD')}>Drag&Drop</Menu>
        <Menu onClick={() => navigate('dropList')}>DropList</Menu>
        <Menu onClick={() => navigate('carousel')}>Carousel</Menu>
      </MenuContainer>
    </Container>
  );
};

export default Navigation;
