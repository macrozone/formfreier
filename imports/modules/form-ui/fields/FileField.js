import { T } from '@panter/manul-i18n';
import { connectField } from 'uniforms';
import { useDeps, composeAll } from 'mantra-core';
import { withHandlers, withState } from 'recompose';
import { withUploader } from '@panter/manul-files';
import DropZone from 'react-dropzone';
import React from 'react';
import _ from 'lodash';

import ErrorField from 'uniforms-bootstrap4/ErrorField';

import Link from '/client/modules/core/components/link';
import styled from 'styled-components';

import wrapField from 'uniforms-bootstrap4/wrapField';


const enhance = composeAll(
  withUploader,
  withHandlers({
    onDropError: ({ context }) => (error) => {
      context().Alerts.show({ message: context().i18n.t('upload.error'), error });
    },
  }),
  useDeps(context => ({
    context: () => context,
  }))
);

export const File = enhance((props) => {
  const {
  onChange,
  showImage = true,
  upload,
  progress,
  status,
  id,
  fileRestrictions = {
    allowedFileTypes: [],
    maxSize: null,
  },
  value,
  errorMessage,

} = props;
  const isImage = _.some(fileRestrictions.allowedFileTypes, type => type.startsWith('image'));
  return wrapField(props, (
    <div>


      <div>
        {status === 'transferring' ?
          <p>{progress} %</p> :
          <DropZone
            id={id}
            multiple={false}
            accept={fileRestrictions.allowedFileTypes.join(',')}
            maxSize={fileRestrictions.maxSizeClient || fileRestrictions.maxSize}
            style={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              position: 'relative',
              width: '100%',
            }}
            onDrop={

              (files) => {
                if (files.length > 0) {
                  /* eslint no-console: 0*/
                  upload(files[0], (error, url) => (error ? console.error(error) : onChange(url)));
                }
              }
            }
          >
            {isImage && showImage ?
              <img role="presentation" src={value} style={{ width: '100%' }} /> : null
            }
            {value && !isImage ? <Link isFile href={value}><T>files.showFile</T></Link> : null}
          </DropZone>
        }
      </div>
      {errorMessage && <ErrorField errorMessage={errorMessage} />}
    </div>
  ));
});


export default connectField(File);
