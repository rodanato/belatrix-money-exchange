// @flow
import React, { Component } from "react";

import * as types from "./exchange.types";
import * as API from "./exchange.api";

import ExchangeHeader from "./header/exchange-header.component";
import ExchangeBody from "./body/exchange-body.component";

class Exchange extends Component<types.ExchangeProps, types.ExchangeState> {
  state = { exchangedCurrency: "" };

  handleExchangedAmount = (amount: number) => {
    this.setState({ exchangedCurrency: amount });
  };

  doExchange = (from: string, to: string, amount: number) => {
    API.doExchangeFromTo(from, to)
      .then(res => res.json())
      .then(res => {
          const convertedValue: number = +(amount * res[`${from}_${to}`].val).toFixed(4);
          this.handleExchangedAmount(convertedValue);
        }
      )
      .catch((error: any) => console.log(error));
  };

  render() {
    return (
      <section className="section-exchange">
        <ExchangeHeader />
        <ExchangeBody
          onExchange={this.doExchange}
          exchangedCurrency={this.state.exchangedCurrency}
        />
      </section>
    );
  }
}

export default Exchange;
