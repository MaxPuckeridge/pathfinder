import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppState, AppStep } from '../redux/types';

interface PropTypes {
  appStep: AppStep;
}

class SetGridSize extends Component<PropTypes> {
  render() {
    return <div>hi!</div>;
  }
}

const mapStateToProps = (state: AppState): PropTypes => ({
  appStep: state.appStep,
});

export default connect(mapStateToProps)(SetGridSize);
