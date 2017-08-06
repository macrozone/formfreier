import React from 'react';
import { T } from '@panter/manul-i18n';
import styled, { css } from 'styled-components';

const ImageWrapper = component => component`
  width: ${p => p.width}%;
  ${p => (p.width || '').toString() !== '100' && css`
    float: left;
    padding-right: 20px;
    ${p.right && css`
      float: right;
      padding-left: 20px;
    `}
  `}
  
  @media (max-width: ${p => p.theme.breakPointTablet - 1}px) {
    ${p => p.fullWithOnMobile && css`
      width: 100%;
      clear: both;
      margin-right: 0;
      margin-left: 0;
    `}
  }
`;

const DivBase = ImageWrapper(styled.div);
const LinkBase = ImageWrapper(styled.a);

const ImageComponent = styled.img`
  width: 100%;
  height:auto;
`;

const Image = ({ imageUrl, altText, link, ...props }) => {
  const Base = link ? LinkBase : DivBase;
  const baseProps = props;
  if (link && !props.isEditing) {
    baseProps.href = link;
    baseProps.target = '_blank';
  }
  return (
    <Base {...baseProps}>
      <ImageComponent alt={altText} src={imageUrl} />
    </Base>
  );
};

Image.propTypes = {
};

Image.defaultProps = {
};

export default Image;
