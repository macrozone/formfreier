import { AutoForm } from 'uniforms-antd';
import { T } from '@panter/manul-i18n';
import React from 'react';
import styled, { css } from 'styled-components';

const AddMediaBase = styled.div`

`;
AddMediaBase.displayName = 'AddMediaBase';

const AddMedia = ({ style, schema, onSubmit }) => (
  <AddMediaBase style={style}>
    <AutoForm schema={schema} onSubmit={onSubmit} />
  </AddMediaBase>
);

AddMedia.propTypes = {
};

AddMedia.defaultProps = {
};

AddMedia.displayName = 'AddMedia';

export default AddMedia;
