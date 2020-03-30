import React, { Component } from 'react';
import styled from 'styled-components';

interface PropTypes {
  solid: boolean;
  onClick: () => void;
}

const StyledGridItem = styled.div<PropTypes>`
  width: 100px;
  height: 100px;
  background-color: ${(props) => (props.solid ? '#999' : '#FFF')};
  border: 1px solid #999;
  border-radius: 4px;
`;

export default class GridItem extends Component<PropTypes> {
  render() {
    return <StyledGridItem {...this.props} />;
  }
}