import { css } from 'styled-components';

export default {
  verticalBarWidth: 40,
  verticalBarWidthDesktop: 60,
  horizontalBarWidth: 40,
  horizontalBarWidthDesktop: 60,
  gutterV: 10,
  gutterH: 15,
  fonts: {
    default: css`
      font-family: sans-serif;
      line-height: 1.3;
    `,
  },
  colors: {
    black: 'black',
    grey: '#CCCCCC',
  },
  paddings: {
    default: css`
      padding: ${p => p.theme.gutterV}px ${p => p.theme.gutterH}px;
    `,
  },
  borders: {
    default: css`
      2px solid ${p => p.theme.colors.black}
    `,
  },

};
