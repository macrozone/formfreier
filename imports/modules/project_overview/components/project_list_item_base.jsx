import styled from 'styled-components';

import breakpoint from '../../../configs/breakpoint';

const ProjectListItemBase = styled.div`
  width: 100%;
  font-size: 8vw;
  ${breakpoint('sm')`
    width: 50%;
    font-size: 4vw;
  `} ${breakpoint('lg')`
    width: 33%;
    font-size: 2vw;
  `} ${breakpoint('xl')`
    width: 25%;
    font-size: 1.5vw;
  `};
`;

export default ProjectListItemBase;
