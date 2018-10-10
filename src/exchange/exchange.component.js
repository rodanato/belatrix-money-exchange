// @flow
import React, { Component } from "react";

import * as types from "./exchange.types";
import * as API from "./exchange.api";

import ExchangeHeader from "./header/exchange-header.component";
import ExchangeBody from "./body/exchange-body.component";

class Exchange extends Component<types.ExchangeProps, types.ExchangeState> {
  doExchange = (from: string, to: string, amount: number) => {
    API.doExchangeFromTo(from, to)
      .then(res => res.json())
      .then(res => console.log(amount*res[`${from}_${to}`].val))
      .catch((error: any) => console.log(error));
  }

  render() {
    return <section className="section-exchange">
      <ExchangeHeader />
      <ExchangeBody onExchange={this.doExchange} />
    </section>;
  }
}

export default Exchange;
