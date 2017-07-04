import breakpoint from 'styled-components-breakpoint';

const breakPoints = {
  sm: 375,
  md: 480,
  lg: 768,
  xl: 1025,
};
export default key => breakpoint(key, breakPoints);
