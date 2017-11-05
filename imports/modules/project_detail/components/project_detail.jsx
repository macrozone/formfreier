import React from 'react';
import moment from 'moment';
import styled, { css, withTheme } from 'styled-components';

import Button from '../../core/components/button';
import ContentArea from '../../cm/components/content_area';
import IfAdmin from '../../core/containers/if_admin';
import LinkButton from '../../core/containers/link_button';
import MediaDropZone from '../containers/media_drop_zone';
import MediaList from './media_list';
import breakpoint from '../../../configs/breakpoint';

const ProjectDetailBase = styled.div``;

const ProjectDetailContent = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
`;

const scrollBox = css`
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`;

const Heading = styled.h2`
  ${p => p.theme.fonts.default};
  font-size: 16px;
`;

/* eslint max-len: 0 */
const ProjectDetailDescription = styled.div`
  ${scrollBox};
  ${breakpoint('lg')`
    flex: 5;
    order: 2;
  `};
  ${p => p.theme.paddings.default};
`;

const ProjectMedia = styled.div`
  min-width: 180px;
  ${scrollBox};
  ${breakpoint('lg')`
    flex: 7;
    order: 1;
  `};
`;

const MediaDropZoneStyled = styled(MediaDropZone)`
  margin-bottom: ${p => p.theme.gutterV}px;
  margin-top: ${p => p.theme.gutterV}px;
  margin-left: ${p => p.theme.gutterH}px;
`;

const AdminActions = styled.div`
  background: white;
  width: 100%;
  flex: 1;
  flex-flow: row;
  & > * {
    margin-right: 5px;
  }
  padding: 5px;
  border-bottom: 1px solid ${p => p.theme.colors.grey};
  border-left: 1px solid ${p => p.theme.colors.grey};
`;

const ProjectDetail = withTheme(
  ({ theme, _id, title, date, media = [], reorderMedia, destroyProject }) => (
    <ProjectDetailBase>
      <IfAdmin>
        <AdminActions>
          <LinkButton
            bsStyle="primary"
            routeName="project.edit"
            params={{ projectId: _id }}
          >
            📝 Edit Project Info
          </LinkButton>
          <LinkButton
            bsStyle="primary"
            routeName="project.addMedia"
            params={{ projectId: _id }}
          >
            📷 Add Media
          </LinkButton>
          <Button bsStyle="danger" onClick={() => destroyProject(_id)}>
            ⚠️ Delete
          </Button>
          <span>
            {title} - {moment(date).format('YYYY-MM-DD')}
          </span>
        </AdminActions>
      </IfAdmin>
      <ProjectDetailContent>
        <ProjectDetailDescription>
          <Heading>{title}</Heading>

          <ContentArea contentId={`description_${_id}`} />
        </ProjectDetailDescription>

        <ProjectMedia>
          <IfAdmin>
            <MediaDropZoneStyled
              projectId={_id}
              directiveName="projectImages"
            />
          </IfAdmin>
          <IfAdmin elseContent={<MediaList media={media.slice(1)} />}>
            <MediaList
              media={media}
              reorderEnabled
              firstIsSpecial
              onReorder={({ startIndex, endIndex }) =>
                reorderMedia({
                  projectId: _id,
                  startIndex,
                  endIndex,
                })}
            />
          </IfAdmin>
        </ProjectMedia>
      </ProjectDetailContent>
    </ProjectDetailBase>
  )
);

export default ProjectDetail;
