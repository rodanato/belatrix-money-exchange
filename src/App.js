// @flow
import React, { Component } from 'react';
import "bulma/css/bulma.css";
import './App.css';

import Exchange from './exchange/header/exchange-header.component';

class App extends Component<void> {

  render() {
    return <main>
        <Exchange />
    </main>;
  }
}

export default App;
