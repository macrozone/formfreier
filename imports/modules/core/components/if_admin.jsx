import React from 'react';
import { T } from '@panter/manul-i18n';
import styled, { css } from 'styled-components';


const IfAdmin = ({ style, isAdmin, children }) => (
  <div style={style}>
    {isAdmin ? children : null}
  </div>
);


export default IfAdmin;
