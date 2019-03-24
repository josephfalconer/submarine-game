import React, { PropTypes, PureComponent } from 'react';

import { CREATURES } from '../constants';

export default function Creature({creature}) {
  const backgroundImageStyle = {
    backgroundImage: `url('img/${creature.name}.png')`,
    top: `${creature.topOffset}%`,
  }
  return (
    <span
      style={backgroundImageStyle}
      className={`creature ${creature.name}`}
    ></span>
  );
}

Creature.propTypes = {
  creature: PropTypes.object,
}
