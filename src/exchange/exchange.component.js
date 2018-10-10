// @flow
import React, { Component } from "react";

import * as types from "./exchange.types";

import ExchangeHeader from "./header/exchange-header.component";
import ExchangeConverter from "./exchange-converter/exchange-converter.component";

class Exchange extends Component<types.ExchangeProps, types.ExchangeState> {
  render() {
    return (
      <section className="section-exchange">
        <ExchangeHeader />

        <section>
          <div className="columns is-multiline">
            <div className="column is-12">
              <ExchangeConverter
                baseCurrency={{
                  text: "USD",
                  symbol: "$"
                }}
                converToCurrency={{
                  text: "EUR",
                  symbol: "€"
                }}
              />

              <ExchangeConverter
                baseCurrency={{
                  text: "EUR",
                  symbol: "€"
                }}
                converToCurrency={{
                  text: "USD",
                  symbol: "$"
                }}
              />
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default Exchange;
