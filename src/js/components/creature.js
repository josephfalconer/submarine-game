import React, { PropTypes, PureComponent } from 'react';

import { CREATURES } from '../constants';

export default function Creature({creature}) {
  return (
    <span className="creature">{creature.name}</span>
  );
}

Creature.propTypes = {
  creature: PropTypes.object,
}
