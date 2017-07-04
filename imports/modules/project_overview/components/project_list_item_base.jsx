import styled from 'styled-components';

import breakpoint from '../../../configs/breakpoint';

const ProjectListItemBase = styled.div`
  width: 100%;
  ${breakpoint('sm')`
    width: 50%;
  `}
  ${breakpoint('md')`
    width: 33%;
  `}
  ${breakpoint('lg')`
    width: 25%;
  `}
`;

export default ProjectListItemBase;
