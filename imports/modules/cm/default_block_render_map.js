import { DraftJS } from 'megadraft';
import { T } from '@panter/manul-i18n';
import React from 'react';
import styled, { css } from 'styled-components';

import Immutable from 'immutable';

import Heading from '../core/components/heading';
import Heading2 from '../core/components/heading_2';

const UnorderedListWrapper = styled.ul`
  list-style-type: disc;
  margin-bottom: ${p => p.theme.paragraphMargin}px;
`;

const OrderedListWrapper = styled.ul`
  list-style-type: decimal;
  margin-bottom: ${p => p.theme.paragraphMargin}px;
`;

const ListItem = styled.li`
  margin-left: 25px;
  ${p => p.theme.fontCopy};
`;

const Lead = styled.p`
  font-family: 'Open Sans', sans-serif;
  line-height: 1.4;
  font-size: 120%;
`;

// see https://draftjs.org/docs/advanced-topics-custom-block-render-map.html
export default DraftJS.DefaultDraftBlockRenderMap.merge(
  Immutable.Map({
    unstyled: {
      element: styled.div`
        margin-bottom: ${p => p.theme.paragraphMargin}px;
        ${p => p.theme.fontCopy};
      `,
      aliasedElements: ['p'],
    },
    'unordered-list-item': {
      element: ListItem,
      wrapper: <UnorderedListWrapper />,
      aliasedElements: ['li'],
    },
    'ordered-list-item': {
      element: ListItem,
      wrapper: <OrderedListWrapper />,
      aliasedElements: ['li'],
    },
    'header-one': {
      element: Heading,
    },
    'header-two': {
      element: Heading2,
    },

    lead: {
      element: Lead,
    },
    atomic: {
      element: styled.figure`
        & + .paragraph {
          float: left; /* float paragraphs after atomic blocks, so that no empty lines appear
           not best solution, but works in most cases*/
        }
        & + *:last-child {
          float: none;
        }
      `,
    },
  })
);
