import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const finalSpaceCharacters = [
  {
    id: '1',
    name: '월급통장',
  },
  {
    id: '2',
    name: '신용대출',
  },
  {
    id: '3',
    name: '주적금',
  },
  {
    id: '4',
    name: '냠냠먹방',
  },
];

const backgroundColorList = [
  'rgb(254, 244, 148, 0.777)',
  'rgba(238, 184, 209, 0.777)',
  'rgb(185, 210, 234, 0.777)',
  'rgb(195, 230, 220, 0.777)',
];

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const DNDListContianer = styled.ul`
  padding: 0;
`;
const DNDList = styled.div`
  font-family: 'Cafe24Ssurround';
  color: rgb(67, 67, 67);
  width: 500px;
  margin: 6px;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
`;

const DandD = () => {
  const [characters, updateCharacters] = useState(finalSpaceCharacters);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <Container>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
          {(provided) => (
            <DNDListContianer
              className="characters"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {characters.map(({ id, name }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <DNDList
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        color={backgroundColorList[id - 1]}
                      >
                        <p>{name}</p>
                      </DNDList>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </DNDListContianer>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
};

export default DandD;
