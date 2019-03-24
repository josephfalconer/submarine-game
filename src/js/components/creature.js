import React, { PropTypes, PureComponent } from 'react';

import { CREATURES } from '../constants';

export default class Creature extends PureComponent {

  componentWillReceiveProps(newProps) {
    if (
      (this.props.scrollPercent > newProps.scrollPercent) && 
      (newProps.scrollPercent > creature.position)
    ) {
      console.log('you went past me');
    }
  }

  render() {
    const { creature } = this.props;
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
}

Creature.propTypes = {
  creature: PropTypes.object,
  scrollPercent: PropTypes.number,
}
