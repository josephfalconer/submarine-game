import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';

import { updateStoreState } from '../actions';
import { CREATURES, SEAWEED } from '../constants';
import Creature from './creature';
import Seaweed from './seaweed';

class App extends PureComponent {

  constructor(props) {
    super(props)
    this.setSeaContainerElement = element => this.seaContainerElement = element;
    this.setSeaContentElement = element => this.seaContentElement = element;
  }

  componentDidMount() {
    const intervalID = setInterval(() => {
      this.updateScrollTop();
    }, 10);
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
    const { scrollPercent } = this.props;
    // const className = scrollTop > 10000 ? 'sea__container no-scroll' : 'sea__container';
    const className = 'sea__container';
    return (
      <div ref={this.setSeaContainerElement} className={className}>
        <div ref={this.setSeaContentElement} className="sea__scrollarea">
          {SEAWEED.map(seaweed => (
            <Seaweed
              key={`seaweed-${seaweed.name}`}
              seaweed={seaweed}
              scrollPercent={scrollPercent}
            />
          ))}
          <Submarine scrollPercent={scrollPercent} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  scrollPercent: PropTypes.number,
  scrollTop: PropTypes.number,
}

function mapStateToProps({scrollTop, scrollPercent}) {
  return {
    scrollTop,
    scrollPercent,
  }
}

export default connect(mapStateToProps, {
  updateStoreState
})(App);
