import React from 'react';
import { T } from '@panter/manul-i18n';
import styled, { css } from 'styled-components';
import DropZone from 'react-dropzone';
import { Circle } from 'rc-progress';

const MediaDropZoneBase = styled.div`
  cursor: pointer;

  & > div {
    width: 100% !important;
    padding: 10px;
    height: 100px;
  }
`;
MediaDropZoneBase.displayName = 'MediaDropZoneBase';

const MediaDropZone = ({
  style,
  className,
  fileRestrictions = { allowedFileTypes: [] },
  addMedia,
  progress,
  status,
}) => (
  <MediaDropZoneBase style={style} className={className}>
    <DropZone
      accept={fileRestrictions.allowedFileTypes.join(',')}
      onDrop={files => files.forEach(addMedia)}
    >
      {status === 'transferring' ? <Circle percent={progress} /> : 'Add Image'}
    </DropZone>
  </MediaDropZoneBase>
);

MediaDropZone.propTypes = {};

MediaDropZone.defaultProps = {};

MediaDropZone.displayName = 'MediaDropZone';

export default MediaDropZone;
