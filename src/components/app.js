import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { updateStoreState } from '../actions';

class App extends PureComponent {

  constructor(props) {
    super(props)
    this.setSeaElement = element => this.seaElement = element;
  }

  componentDidMount() {
    const intervalID = setInterval(() => {
      this.updateScrollTop();
    }, 10);
  }

  updateScrollTop = () => {
    window.requestAnimationFrame(() => {
      const scrollTop = this.seaElement.scrollTop;
      if (scrollTop !== this.props.scrollTop) {
        this.props.updateStoreState({scrollTop});
      }
    });
  }

  render() {
    const className = this.props.scrollTop > 10000 ? 'sea__container no-scroll' : 'sea__container';
    return (
      <div ref={this.setSeaElement} className={className}>
        <div className="sea__scrollarea"></div>
      </div>
    );
  }
}

function mapStateToProps({scrollTop}) {
  return {
    scrollTop,
  }
}

export default connect(mapStateToProps, {
  updateStoreState
})(App);
