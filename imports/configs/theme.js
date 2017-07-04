import { css } from 'styled-components';

export default {
  verticalBarWidth: 30,
  verticalBarWidthDesktop: 60,
  horizontalBarWidth: 90,
  horizontalBarWidthDesktop: 60,
  gutterV: 15,
  gutterH: 10,
  fonts: {
    default: css`
      font-family: sans-serif;
      line-height: 1.3;
    `,
  },
  colors: {
    black: 'black',
  },
  paddings: {
    default: css`
      padding: ${p => p.theme.gutterH}px ${p => p.theme.gutterV}px;
    `,
  },
  borders: {
    default: css`
      2px solid ${p => p.theme.colors.black}
    `,
  },

};
