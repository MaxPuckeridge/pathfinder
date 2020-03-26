import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { TomatoButton } from './Buttons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TomatoButton>
            Tomato
        </TomatoButton>
      </div>
    );
  }
}

export default hot(module)(App);
