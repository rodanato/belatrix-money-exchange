// @flow
import React, { Component } from 'react';
import "bulma/css/bulma.css";
import './App.css';

import Exchange from './exchange/exchange.component';

class App extends Component<void> {

  render() {
    return <main>
        <Exchange />
    </main>;
  }
}

export default App;
