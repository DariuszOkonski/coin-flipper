import React, { Component } from 'react';

class Coin extends Component {
  render() {
    const coinStyle = {
      display: 'block',
      width: '200px', 
      margin: '10px auto'
    }

    return (
      <img style={coinStyle} src={this.props.imgSrc} alt={this.props.side} />
    );
  }
}

export default Coin;