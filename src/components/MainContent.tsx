import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box } from 'grommet';
import { AppState, AppStep } from '../redux/types';
import SetGridSize from './SetGridSize';
import SetupGrid from './SetupGrid';

interface PropTypes {
  appStep: AppStep;
}

class MainContent extends Component<PropTypes> {
  render() {
    const { appStep } = this.props;
    const content = this.getContent(appStep);

    return (
      <Box
        align="center"
        pad={{ top: 'large', bottom: 'small' }}
      >
        <Box width="auto">{content}</Box>
      </Box>
    );
  }

  getContent(appStep: AppStep) {
    switch (appStep) {
      case AppStep.SetGridSize:
        return <SetGridSize />;

      case AppStep.SetupGrid:
        return <SetupGrid />;

      default:
        return null;
    }
  }
}

const mapStateToProps = (state: AppState): PropTypes => ({
  appStep: state.appStep,
});

export default connect(mapStateToProps)(MainContent);
