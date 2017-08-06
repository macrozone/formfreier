import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Teaser from '../teaser';


storiesOf('cm.Teaser', module)
  .addWithDoc('default view', Teaser,
  'This is the default view',
  () => (
    <Teaser
      imageUrl="http://www.provelozuerich.ch/wp-content/uploads/2016/02/kennedieregeln-880x440.jpg"
      linkUrl="home"
      text="Bestelle bei Rent a Bike eine Flotte E-Bikes oder Velos für Mitarbeitende, welche über kein eigenes Velo verfügen und profitiere von bis zu über 50 % bike to work Rabatt auf dem Normaltarif."
      headline="Veloflotte bei Rent a Bike mieten"
    />
    ))
  .addWithDoc('with divider', Teaser,
  'This is the default view',
  () => (
    <div>
      <Teaser
        imageUrl="http://www.provelozuerich.ch/wp-content/uploads/2016/02/kennedieregeln-880x440.jpg"
        linkUrl="home"
        text="Bestelle bei Rent a Bike eine Flotte E-Bikes oder Velos für Mitarbeitende, welche über kein eigenes Velo verfügen und profitiere von bis zu über 50 % bike to work Rabatt auf dem Normaltarif."
        headline="Veloflotte bei Rent a Bike mieten"
        hasDivider
      />
      <Teaser
        imageUrl="http://www.provelozuerich.ch/wp-content/uploads/2016/02/kennedieregeln-880x440.jpg"
        linkUrl="home"
        text="Bestelle bei Rent a Bike eine Flotte E-Bikes oder Velos für Mitarbeitende, welche über kein eigenes Velo verfügen und profitiere von bis zu über 50 % bike to work Rabatt auf dem Normaltarif."
        headline="Veloflotte bei Rent a Bike mieten"
        hasDivider
      />
    </div>
  ));
