import React from 'react';
import icons from 'megadraft/lib/icons';

import ExternalLinkIcon from '/imports/modules/core/components/icon_external_link';
import FileLinkIcon from '/imports/modules/core/components/icon_file_link';

export const inlineActions = [
  { type: 'inline', label: 'B', style: 'BOLD', icon: icons.BoldIcon },
  { type: 'inline', label: 'I', style: 'ITALIC', icon: icons.ItalicIcon },
  { type: 'entity', label: 'Link', style: 'link', entity: 'PAGE_LINK', icon: icons.LinkIcon },
  { type: 'entity', label: 'Link', style: 'link', entity: 'EXTERNAL_LINK', icon: ExternalLinkIcon },
  { type: 'entity', label: 'Link', style: 'link', entity: 'FILE_LINK', icon: FileLinkIcon },
];

export const headingActions = [
  { type: 'block', label: 'H1', style: 'header-one', icon: () => <span>H1</span> },
  { type: 'block', label: 'H2', style: 'header-two', icon: () => <span>H2</span> },
{ type: 'block', label: 'H3', style: 'header-three', icon: () => <span>H3</span> },
{ type: 'block', label: 'LEAD', style: 'lead', icon: () => <span>LEAD</span> },
];

export const blockActions = [
  { type: 'block', label: 'UL', style: 'unordered-list-item', icon: icons.ULIcon },
  { type: 'block', label: 'OL', style: 'ordered-list-item', icon: icons.OLIcon },
];

export default [
  ...inlineActions,
  { type: 'separator' },
  ...headingActions,
  { type: 'separator' },
  ...blockActions,
];
