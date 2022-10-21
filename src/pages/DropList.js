import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import uuid from 'uuid4';
import styled from 'styled-components';

const itemsFromBackend = [
  { id: uuid(), content: '월급 통장 정리하기' },
  { id: uuid(), content: '신용 대출 문의하기' },
  { id: uuid(), content: '적금 만들기' },
  { id: uuid(), content: '친구들이랑 통장 만들기' },
];

const columnsFromBackend = {
  [uuid()]: {
    name: 'To do',
    items: itemsFromBackend,
  },

  [uuid()]: {
    name: 'Done',
    items: [],
  },
};

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

const DropListContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;

const ColumBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Box = styled.div`
  padding: 4px;
  width: 250px;
  min-height: 300px;
  border-radius: 15px;
  background-color: ${(props) => props.backgroundColor};
`;

const DropableContainer = styled.div`
  margin: 8px;
`;

const Comment = styled.div`
  @font-face {
    font-family: 'Cafe24Ssurround';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/Cafe24Ssurround.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'Cafe24Ssurround';
  user-select: none;
  padding: 16px;
  margin: 10px 10px 10px 10px;
  min-height: 20px;
  color: rgb(67, 67, 67);
  border-radius: 15px;
  text-align: center;
  background-color: ${(props) => props.backgroundColor};
`;

function DropList() {
  const [columns, setColumns] = useState(columnsFromBackend);
  return (
    <DropListContainer>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <ColumBox key={columnId}>
              <DropableContainer>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <Box
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        backgroundColor={
                          snapshot.isDraggingOver
                            ? 'rgb(254, 244, 148, 0.777)'
                            : 'rgb(0, 0, 0, 0.12)'
                        }
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <Comment
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      ...provided.draggableProps.style,
                                    }}
                                    backgroundColor={
                                      snapshot.isDragging
                                        ? 'rgb(195, 230, 220, 0.777)'
                                        : 'rgb(195, 230, 220)'
                                    }
                                  >
                                    {item.content}
                                  </Comment>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </Box>
                    );
                  }}
                </Droppable>
              </DropableContainer>
            </ColumBox>
          );
        })}
      </DragDropContext>
    </DropListContainer>
  );
}

export default DropList;
