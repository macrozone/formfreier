import React from 'react';
import { T } from '@panter/manul-i18n';
import styled, { css } from 'styled-components';

const AboutBase = styled.div`
  padding: 10px;
  ${p => p.theme.fonts.default};
`;
AboutBase.displayName = 'AboutBase';
/* eslint max-len: 0*/
const About = ({ style }) => (
  <AboutBase style={style}>
    Sandro Wettstein, Graphic Design<br /><br />
Visuelle Kommunikation<br />
Art Direction<br />
Moving Images<br /><br />
+41 (0)76 332 27 24<br />
    <a href="mailto:sandro@sandrowettstein.ch">sandro@sandrowettstein.ch</a><br />
  Bändlistrasse 29<br />
CH-8005 Zürich<br />
    <br />
    <br />
Service<br />
Als visueller Gestalter mit breitem praktischen Hintergrund interessieren mich klassische Printprodukte, Kommunikationsstrategien im Raum, Multimediaund Bewegtbildprojekte.
Dabei entstehen in enger Zusammenarbeit mit dem Auftraggeber visuelle Erscheinungsbilder für Restaurants, kommunikative Gesamtstrategien für Literaturausstellungen oder Lehrbücher von Künstlern.
<br />
    <br />
Ich arbeite,
je nach Auftrag im Team mit Szenografen, Fotografen, Programmierern und weiteren Fachleuten zusammen.
<br />
    <br />
Profil<br /><br />
*1983, Ausbildung als Grafiker und Studium in Visueller Kommunikation an der Zürcher Hochschule der Künste. Grafik Designer in diversen Design Studios in Zürich und New York (Sagmeister inc., 2 x 4). Langjährige Zusammenarbeit mit Roland Wohler und dem Künstler Peter Radelfinger in den Bereichen: Grafik Design, Kunst und Bewegtes Bild. Leitung von Workshops an der Schule für Gestaltung Basel (SfG Basel) und an der GDK Ge
  </AboutBase>
);

About.propTypes = {
};

About.defaultProps = {
};

About.displayName = 'About';

export default About;
