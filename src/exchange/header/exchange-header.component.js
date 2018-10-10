// @flow
import React from "react";

import * as styles from './exchange-header.styles';
// import { ReactComponent as Logo } from "../../logo.svg";

const ExchangeHeader = () => (
  <header className={styles.exchangeHeader}>
    {/* <Logo className="logo" width="200" /> */}

    <div className="field is-grouped has-centered-text">
      <p className="control">
        <button className="button">Button A</button>
      </p>
      <p className="control">
        <button className="button">Button B</button>
      </p>
      <p className="control">
        <button className="button">Button C</button>
      </p>
      <p className="control">
        <button className="button">Button D</button>
      </p>
    </div>
  </header>
);

export default ExchangeHeader;
