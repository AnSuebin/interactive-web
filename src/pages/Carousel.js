import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const colors = [
  'https://images.unsplash.com/photo-1553882951-9c3dab4a50cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHNreXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1597571063304-81f081944ee8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHNreXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1532767153582-b1a0e5145009?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHNreXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
];

const delay = 2500;

const SlideShow = styled.div`
  margin: 0 auto;
  overflow: hidden;
  max-width: 500px;
`;

const SlideShowSlider = styled.div`
  white-space: nowrap;
  transition: ease 1000ms;
`;

const Slide = styled.img`
  display: inline-block;
  height: 400px;
  width: 100%;
  border-radius: 30px;
  object-fit: cover;
`;

const SlideShowDots = styled.div`
  text-align: center;
`;

const SlideShowDot = styled.div`
  display: inline-block;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  cursor: pointer;
  margin: 15px 7px 0px;
  background-color: #c4c4c4;
  &:active {
    background-color: #6a0dad;
  }
`;

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {};
  }, [index]);

  return (
    <SlideShow>
      <SlideShowSlider
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((img, index) => (
          <Slide key={index} src={img}></Slide>
        ))}
      </SlideShowSlider>
      <SlideShowDots>
        {colors.map((_, idx) => (
          <SlideShowDot
            key={idx}
            className={`${index === idx ? styled.active : ''}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></SlideShowDot>
        ))}
      </SlideShowDots>
    </SlideShow>
  );
};
export default Carousel;
