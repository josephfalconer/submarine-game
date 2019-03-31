import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';

import { updateStoreState } from '../actions';
import { CREATURES } from '../constants';

class Creature extends PureComponent {

  componentWillReceiveProps({scrollPercent}) {
    const { creature, doneQuestions, updateStoreState } = this.props;
    if (
      doneQuestions.indexOf(creature.name) === -1 && 
      scrollPercent > creature.topOffset
    ) {
      updateStoreState({
        doneQuestions: [
          ...doneQuestions,
          creature.name,
        ],
        quizQuestion: creature.question,
      });
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
  updateStoreState: PropTypes.func,
  doneQuestions: PropTypes.array,
}

function mapStateToProps({doneQuestions, scrollPercent}) {
  return {
    doneQuestions,
    scrollPercent,
  }
}

export default connect(mapStateToProps, {
  updateStoreState,
})(Creature);
