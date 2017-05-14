import React from 'react';
import { T } from '@panter/manul-i18n';
import styled, { css } from 'styled-components';
import link from '../../core/hocs/link';

const ProjectListItemLink = link(styled.a`
  margin: 5px;
  background-color: white;
  display: block;
  transition: 0.3s;
  padding: 10px;
  position: relative;
  &:hover {
    transform: rotate(-1deg) scale(1.1);
    z-index: 10;
  }
`);

export default ProjectListItemLink;
