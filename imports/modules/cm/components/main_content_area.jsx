import { T } from '@panter/manul-i18n';
import React from 'react';
import styled, { css } from 'styled-components';
import { ContentArea } from '@panter/manul-draft';
import * as BlockPlugins from '../block_plugins';
import * as entities from '../entities';
import { values } from 'lodash/fp';
import megadraftActions from '../megadraft_actions';
import defaultBlockRenderMap from '../default_block_render_map';
import defaultSampleContent from '../default_sample_content';

const MainContentArea = ({ ...props }) => (
  <ContentArea
    blockPlugins={[
      BlockPlugins.image(),
      BlockPlugins.teaser,
      BlockPlugins.button,
      BlockPlugins.document,
      BlockPlugins.youtube,
      BlockPlugins.newsletter,
      BlockPlugins.hr,
      BlockPlugins.sponsorList,
    ]}
    entities={values(entities)}
    megadraftActions={megadraftActions}
    sampleContent={defaultSampleContent}
    blockRenderMap={defaultBlockRenderMap}
    {...props}
  />
);

export default MainContentArea;
