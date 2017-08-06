import React from 'react';
import { T } from '@panter/manul-i18n';
import styled, { css } from 'styled-components';
import NavigationListItemLink from '../../core/components/navigation_list_item_link';
import NavigationListItemIcon from '../../core/components/navigation_list_item_icon';
import Heading2 from '../../core/components/heading_2';
import Image from './image';


const TeaserBaseWrapperLink = styled(NavigationListItemLink) `
  display: flex;
`;

const TeaserBaseWrapper = styled.div`
  display: flex;
`;

const TeaserBase = styled.div`
  width: 100%;
  align-items: initial;
  margin-bottom: 27px;
  display: flex;
  ${p => p.hasDivider && css`padding-bottom: 10px`};
  flex-flow: column;
  ${p => p.hasDivider ? css`border-bottom: 1px solid ${p.theme.borderLight};` : ''}
  @media (min-width: ${p => p.theme.breakPointTablet}px) {
    ${p => p.hasDivider && css`padding-bottom: 17px`};
    display: block;
  }
`;

const TeaserHeadline = styled(Heading2) `
  margin-bottom: 10px;
  order: 1;
`;

const TeaserText = styled.div`
  display: block;
  margin-bottom: 10px;
  ${p => p.theme.fontCopy};
  order: 3;
`;

const NavigationListItemIconWrapper = styled.div`
  display: inline-block;
  margin-bottom: 10px;
  order: 4;
`;

const TeaserImage = styled(Image) `
  order: 2;
`;

/* global window */

const Teaser = ({ style, className, gotoRoute, imageUrl, externalUrl, internalUrl, text, headline, hasDivider = false }) => {
  const WrapperComponent = internalUrl || externalUrl ? TeaserBaseWrapperLink : TeaserBaseWrapper;

  const onClick = (e) => {
    e.preventDefault();
    if (externalUrl) {
      let prependedExternalUrl = externalUrl;
      if (!externalUrl.startsWith('http://') && !externalUrl.startsWith('https://')) {
        prependedExternalUrl = `http://${externalUrl}`;
      }
      window.open(prependedExternalUrl, '_blank');
    } else if (internalUrl) {
      gotoRoute(internalUrl);
    }
  };

  return (
    <WrapperComponent
      onClick={onClick}
      showIcon={false}
      showBorderBottom={false}
      showBorderTop={false}
    >
      <TeaserBase
        style={style}
        className={className}
        hasDivider={hasDivider}
      >
        <TeaserImage altText={headline} imageUrl={imageUrl} width={50} />
        {headline && <TeaserHeadline>{headline}</TeaserHeadline>}
        {text && <TeaserText>{text}</TeaserText>}
        {
          internalUrl || externalUrl ?
            <NavigationListItemIconWrapper>
              <NavigationListItemIcon />
            </NavigationListItemIconWrapper>
            : ''
        }

      </TeaserBase>
    </WrapperComponent>
  );
};

Teaser.propTypes = {
};

Teaser.defaultProps = {
};

export default Teaser;
