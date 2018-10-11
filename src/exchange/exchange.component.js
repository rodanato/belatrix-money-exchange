// @flow
import React, { Component } from "react";

import * as types from "./exchange.types";
import * as styles from "./exchange.styles";

import ExchangeHeader from "./header/exchange-header.component";
import ExchangeFooter from "./footer/exchange-footer.component";
import ExchangeConverter from "./converter/exchange-converter.component";

class Exchange extends Component<types.ExchangeProps, types.ExchangeState> {
  render() {
    return (
      <section className="section-exchange">
        <ExchangeHeader />

        <section className={styles.exchangeBody}>
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
            </div>
          </div>
        </section>

        <ExchangeFooter />
      </section>
    );
  }
}

export default Exchange;
