import { ContentArea as ContentAreaOrg } from '@panter/manul-draft';
import { values } from 'lodash/fp';
import React from 'react';

import * as BlockPlugins from '../block_plugins';
import defaultBlockRenderMap from '../default_block_render_map';
import defaultSampleContent from '../default_sample_content';
import * as entities from '../entities';
import megadraftActions from '../megadraft_actions';


const ContentArea = props => (
  <ContentAreaOrg
    blockPlugins={[
      BlockPlugins.document,
    ]}
    entities={values(entities)}
    megadraftActions={megadraftActions}
    sampleContent={defaultSampleContent}
    blockRenderMap={defaultBlockRenderMap}
    {...props}
  />
);

export default ContentArea;
