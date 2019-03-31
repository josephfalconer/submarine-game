import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';

import { updateStoreState } from '../actions';
import { CREATURES, SEAWEED } from '../constants';
import Creature from './creature';
import DialogueBox from './dialogue-box';
import Seaweed from './seaweed';
import Submarine from './submarine';

class App extends PureComponent {

  constructor(props) {
    super(props)
    this.setSeaContainerElement = element => this.seaContainerElement = element;
    this.setSeaContentElement = element => this.seaContentElement = element;
  }

  componentDidMount() {
    this.props.updateStoreState({scrollContainer: this.seaContainerElement});
    const intervalID = setInterval(() => {
      this.updateScrollTop();
    }, 10);
    this.seaContainerElement.focus();
  }

  updateScrollTop = () => {
    window.requestAnimationFrame(() => {
      const scrollTop = this.seaContainerElement.scrollTop;
      if (scrollTop !== this.props.scrollTop) {
        const scrollMax = this.seaContentElement.clientHeight - window.innerHeight;
        const scrollPercent = (scrollTop / scrollMax) * 100;
        this.props.updateStoreState({
          scrollTop,
          scrollPercent,
        });
      }
    });
  }

  render() {
    const { scrollPercent, scrollTop, quizQuestion } = this.props;
    const className = quizQuestion ? 'sea__container no-scroll' : 'sea__container';
    return (
      <div tabIndex="0" ref={this.setSeaContainerElement} className={className}>
        <div ref={this.setSeaContentElement} className="sea__scrollarea">
          {SEAWEED.map(seaweed => (
            <Seaweed
              key={`seaweed-${seaweed.name}`}
              seaweed={seaweed}
              scrollPercent={scrollPercent}
            />
          ))}
          {CREATURES.map(creature => (
            <Creature key={`creature-${creature.name}`} creature={creature} />
          ))}
          <Submarine scrollPercent={scrollPercent} />
        </div>
        <DialogueBox />
      </div>
    );
  }
}

App.propTypes = {
  scrollPercent: PropTypes.number,
  scrollTop: PropTypes.number,
  quizQuestion: PropTypes.object,
}

function mapStateToProps({scrollTop, scrollPercent, quizQuestion}) {
  return {
    scrollTop,
    scrollPercent,
    quizQuestion,
  }
}

export default connect(mapStateToProps, {
  updateStoreState
})(App);
