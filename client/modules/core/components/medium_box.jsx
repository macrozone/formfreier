import React from 'react';
import { T } from '@panter/manul-i18n';
import styled, { css } from 'styled-components';

const MediumBoxBase = styled.div`
  padding: 10px;
`;
MediumBoxBase.displayName = 'MediumBoxBase';

const MediumBox = ({ style, medium }) => (
  <MediumBoxBase style={style}>
    <img style={{ width: '100%' }} src={medium.fileUrl} />
  </MediumBoxBase>
);

MediumBox.propTypes = {
};

MediumBox.defaultProps = {
};

MediumBox.displayName = 'MediumBox';

export default MediumBox;
