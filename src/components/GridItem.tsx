import React, { Component } from 'react';
interface PropTypes {
  solid: boolean;
  onClick: () => void;
}

export default class GridItem extends Component<PropTypes> {
  render() {
    return <div>Hi</div>;
  }
}