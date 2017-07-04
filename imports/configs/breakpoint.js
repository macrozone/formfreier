import breakpoint from 'styled-components-breakpoint';

const breakPoints = {
  sm: 641,
  md: 768,
  lg: 1025,
};
export default key => breakpoint(key, breakPoints);
