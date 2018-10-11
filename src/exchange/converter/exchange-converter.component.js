// @flow
import React, { Component } from "react";
import * as types from "./exchange-converter.types";
import * as styles from "./exchange-converter.styles";
import * as API from "../exchange.api";
import ConverterInput from "./input/converter-input.component";
import ConverterOutput from "./output/converter-output.component";

const requestTimeout: number = 10 * 60 * 1000;

class ExchangeConverter extends Component<
  types.ExchangeConverterProps,
  types.ExchangeConverterState
> {
  requestTimer: IntervalID;

  state = {
    baseCurrencyValue: "",
    exchangedCurrency: ""
  };

  doExchange = (from: string, to: string, amount: string) => {
    API.doExchangeFromTo(from, to)
      .then(res => res.json())
      .then(res => {
        const convertedValue: number = +amount * res[`${from}_${to}`].val;
        this.handleExchangedAmount(convertedValue);
      })
      .catch((error: Error) => console.log(error));
  };

  handleExchangedAmount = (amount: number) => {
    this.setState({ exchangedCurrency: amount });
  };

  handleBaseCurrency = (values: types.ExchangeFormatter) => {
    this.setState({ baseCurrencyValue: values.value });
  };

  handleSubmit = (event: SyntheticEvent<HTMLButtonElement>) => {
    if (this.state.baseCurrencyValue !== "") {
      clearInterval(this.requestTimer);

      this.doExchange(
        this.props.baseCurrency.text,
        this.props.converToCurrency.text,
        this.state.baseCurrencyValue
      );

      this.requestTimer = setInterval(() => {
        this.doExchange(
          this.props.baseCurrency.text,
          this.props.converToCurrency.text,
          this.state.baseCurrencyValue
        );
      }, requestTimeout);
    }
    event.preventDefault();
  };

  render() {
    return (
      <section className={styles.exchangeConverter}>
        <form onSubmit={this.handleSubmit}>
          <div className="columns is-centered">
            <div className="column is-4">
              <div className="control">
                <label className="label">{this.props.baseCurrency.text}</label>
                <ConverterInput
                  onValueChange={this.handleBaseCurrency}
                  symbol={this.props.baseCurrency.symbol}
                />
              </div>
            </div>

            <div className="column is-4">
              <div className="control">
                <label className="label">
                  {this.props.converToCurrency.text}
                </label>
                <ConverterOutput
                  exchangedCurrency={this.state.exchangedCurrency}
                  symbol={this.props.converToCurrency.symbol}
                />
              </div>
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column is-3">
              <button
                type="button"
                className="button is-link is-fullwidth"
                onClick={this.handleSubmit}
              >
                Calculate
              </button>
            </div>
          </div>
        </form>
      </section>
    );
  }
}

export default ExchangeConverter;
