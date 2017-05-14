import React from 'react';
import { T } from '@panter/manul-i18n';
import styled, { css } from 'styled-components';

const MediumBoxBase = styled.div`

`;
MediumBoxBase.displayName = 'MediumBoxBase';

const MediumBox = ({ style, className, medium }) => (
  <MediumBoxBase style={style} className={className}>
    <img role="presentation" style={{ width: '100%' }} src={medium.fileUrl} />
  </MediumBoxBase>
);

MediumBox.propTypes = {
};

MediumBox.defaultProps = {
};

MediumBox.displayName = 'MediumBox';

export default MediumBox;
