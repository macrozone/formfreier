import React from 'react';
import styled from 'styled-components';

import ContentArea from '../../cm/components/content_area';

const AboutBase = styled.div`
  padding: 10px;
  ${p => p.theme.fonts.default};
`;
AboutBase.displayName = 'AboutBase';
/* eslint max-len: 0*/
const About = ({ style }) => (
  <AboutBase style={style}>
    <ContentArea
      contentId="about"
    />
  </AboutBase>
);

About.propTypes = {
};

About.defaultProps = {
};

About.displayName = 'About';

export default About;
