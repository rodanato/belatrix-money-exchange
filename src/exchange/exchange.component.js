// @flow
import React, { Component } from "react";

import * as types from "./exchange.types";
import * as API from "./exchange.api";

import ExchangeHeader from "./header/exchange-header.component";
import ExchangeBody from "./body/exchange-body.component";

class Exchange extends Component<types.Props, types.State> {
  doExchange() {
    API.exchangeFromTo("USD", "EUR", 20)
      .then(res => res.json())
      .then((res: types.exchangeResponse) => res.result)
      .catch((error: string) => console.error(error));
  }

  render() {
    return <section className="section-exchange">
        <ExchangeHeader />
        <ExchangeBody />
      </section>;
  }
}

export default Exchange;
