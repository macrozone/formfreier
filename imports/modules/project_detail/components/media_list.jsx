import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import React from 'react';
import styled, { withTheme } from 'styled-components';

import MediumBox from '../../core/components/medium_box';

const getItemStyle = ({
  firstIsSpecial,
  theme,
  draggableStyle,
  isDragging,
  isFirst,
}) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  ...(isFirst && firstIsSpecial
    ? {
      borderColor: 'white',
      borderStyle: 'solid',
      borderWidth: `${theme.gutterH}px ${theme.gutterH}px`,
    }
    : {}),

  background: isDragging ? 'white' : null,

  // styles we need to apply on draggables
  ...draggableStyle,
  left: `calc(100vw + ${draggableStyle.left - theme.verticalBarWidth}px)`,
});

const getListStyle = isDraggingOver => ({});

const ProjectMediumBox = styled(MediumBox)`
  margin-bottom: ${p => p.theme.gutterV}px;
`;

/* eslint no-shadow: 0*/
const MediaList = withTheme(
  ({ firstIsSpecial, reorderEnabled, theme, media, onReorder }) => (
    <DragDropContext
      onDragEnd={(result) => {
        // dropped outside the list
        if (!reorderEnabled || !onReorder || !result.destination) {
          return;
        }
        onReorder({
          startIndex: result.source.index,
          endIndex: result.destination.index,
        });
      }}
    >
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            {media.map((medium, index) => (
              <Draggable
                isDragDisabled={!reorderEnabled}
                key={medium._id}
                draggableId={medium._id}
              >
                {(provided, snapshot) => (
                  <div>
                    <div
                      ref={provided.innerRef}
                      style={getItemStyle({
                        theme,
                        firstIsSpecial,
                        draggableStyle: provided.draggableStyle,
                        isDragging: snapshot.isDragging,
                        isFirst: index === 0,
                      })}
                      {...provided.dragHandleProps}
                    >
                      <ProjectMediumBox medium={medium} />
                    </div>
                    {provided.placeholder}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
);

export default MediaList;
