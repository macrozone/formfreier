import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import React from 'react';
import styled, { css, withTheme } from 'styled-components';

import Button from '../../core/components/button';
import ContentArea from '../../cm/components/content_area';
import IfAdmin from '../../core/containers/if_admin';
import LinkButton from '../../core/containers/link_button';
import MediaDropZone from '../containers/media_drop_zone';
import MediumBox from '../../core/components/medium_box';
import breakpoint from '../../../configs/breakpoint';

const getItemStyle = (theme, draggableStyle, isDragging) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',

  // change background colour if dragging
  background: isDragging ? 'white' : null,

  // styles we need to apply on draggables
  ...draggableStyle,
  left: `calc(100vw + ${draggableStyle.left - theme.verticalBarWidth}px)`,
});

const getListStyle = isDraggingOver => ({});

const ProjectDetailBase = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
`;

const scrollBox = css`
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  ${p => p.theme.paddings.default};
`;

const Heading = styled.h2`
  ${p => p.theme.fonts.default};
  font-size: 16px;
`;

/* eslint max-len: 0 */
const ProjectDetailDescription = styled.div`
  ${scrollBox} ${breakpoint('lg')`
    flex: 5;
    order: 2;
  `};
`;

const ProjectMedia = styled.div`
  min-width: 180px;
  ${scrollBox} ${breakpoint('lg')`
    flex: 7;
    order: 1;
  `};
`;

const ProjectDetailFacts = styled.div`
  ${scrollBox} ${breakpoint('lg')`
    order: 3;
    flex-basis: 100%;

  `};
`;

const ProjectMediumBox = styled(MediumBox)`
  margin-bottom: ${p => p.theme.gutterV}px;
`;

const MediaDropZoneStyled = styled(MediaDropZone)`
  margin-bottom: ${p => p.theme.gutterV}px;
  margin-top: ${p => p.theme.gutterV}px;
`;

const ProjectDetail = withTheme(
  ({ theme, _id, title, media = [], reorderMedia, destroyProject }) => (
    <ProjectDetailBase>
      <ProjectDetailDescription>
        <Heading>{title}</Heading>
        <IfAdmin>
          <LinkButton
            type="primary"
            routeName="project.edit"
            params={{ projectId: _id }}
          >
            Edit
          </LinkButton>
          <Button bsStyle="danger" onClick={() => destroyProject(_id)}>
            Delete
          </Button>
        </IfAdmin>
        <ContentArea contentId={`description_${_id}`} />
      </ProjectDetailDescription>

      <ProjectMedia>
        <DragDropContext
          onDragEnd={(result) => {
            // dropped outside the list
            if (!result.destination) {
              return;
            }
            reorderMedia({
              projectId: _id,
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
                {media.map(medium => (
                  <Draggable key={medium._id} draggableId={medium._id}>
                    {(provided, snapshot) => (
                      <div>
                        <div
                          ref={provided.innerRef}
                          style={getItemStyle(
                            theme,
                            provided.draggableStyle,
                            snapshot.isDragging
                          )}
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

        <IfAdmin>
          <LinkButton
            type="primary"
            routeName="project.addMedia"
            params={{ projectId: _id }}
          >
            Add Media
          </LinkButton>
          <MediaDropZoneStyled projectId={_id} directiveName="projectImages" />
        </IfAdmin>
      </ProjectMedia>
      <ProjectDetailFacts>
        <ContentArea contentId={`facts_${_id}`} />
      </ProjectDetailFacts>
    </ProjectDetailBase>
  )
);

export default ProjectDetail;
