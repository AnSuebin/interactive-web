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
  @font-face {
    font-family: 'Cafe24Ssurround';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/Cafe24Ssurround.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'Cafe24Ssurround';
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
