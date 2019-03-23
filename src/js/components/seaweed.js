import React, { PropTypes, PureComponent } from 'react';

export default class Seaweed extends PureComponent {
  constructor(props) {
    super(props)
    this.setSeaweedElement = element => this.seaweedElement = element;
  }

  render() {
    const { seaweed } = this.props;
    const SeaweedSvg = seaweed.svgComponent;
    const seaweedStyle = {
      top: `${seaweed.topOffset}%`,
      transform: `translateY(-${this.getNewOffset()}px)`,
    }
    return (
      <span 
        ref={this.setSeaweedElement} 
        className={`seaweed seaweed--${seaweed.name}`} 
        style={seaweedStyle}
      >
        <SeaweedSvg />
      </span>
    );
  }

  getNewOffset = () => {
    const { seaweed, scrollPercent } = this.props;
    const pixelsToTop = (window.innerHeight / 100) * seaweed.topOffset;
    if (this.seaweedElement) {      
      const distanceToFinalPosition = (pixelsToTop + this.seaweedElement.clientHeight) * 2;
      const newTopOffset = (distanceToFinalPosition / 100) * scrollPercent;
      return Math.floor(newTopOffset);
    }
    return 0;
  }
}

Seaweed.propTypes = {
  seaweed: PropTypes.object,
  scrollPercent: PropTypes.number,
};
