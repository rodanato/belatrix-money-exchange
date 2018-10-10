// @flow
import React, { Component } from "react";
import * as types from "../exchange.types";
import NumberFormat from "react-number-format";
import * as API from "../exchange.api";

class ExchangeConverter extends Component<
  types.ExchangeConverterProps,
  types.ExchangeConverterState
> {
  state = {
    baseCurrencyValue: "",
    exchangedCurrency: ""
  };

  doExchange = (from: string, to: string, amount: number) => {
    API.doExchangeFromTo(from, to)
      .then(res => res.json())
      .then(res => {
        const convertedValue: number = amount * res[`${from}_${to}`].val;
        this.handleExchangedAmount(convertedValue);
      })
      .catch((error: any) => console.log(error));
  };


  handleExchangedAmount = (amount: number) => {
    this.setState({ exchangedCurrency: amount });
  };

  handleBaseCurrency = (values: types.ExchangeFormatter) => {
    this.setState({ baseCurrencyValue: values.value });
  };

  handleSubmit = (event: any) => {
    if (this.state.baseCurrencyValue !== "") {
      this.doExchange(
        this.props.baseCurrency.text,
        this.props.converToCurrency.text,
        this.state.baseCurrencyValue
      );
    }
    event.preventDefault();
  };

  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <div className="columns is-multiline is-centered">
            <div className="column is-6">
              <div className="control">
                <label className="label">{this.props.baseCurrency.text}</label>
                <NumberFormat
                  className={"input"}
                  onValueChange={this.handleBaseCurrency}
                  thousandSeparator={true}
                  decimalScale={4}
                  prefix={this.props.baseCurrency.symbol}
                />
              </div>
            </div>

            <div className="column is-6">
              <div className="control">
                <label className="label">{this.props.converToCurrency.text}</label>
                <NumberFormat
                  className="input"
                  value={this.state.exchangedCurrency}
                  displayType={"text"}
                  decimalScale={4}
                  thousandSeparator={true}
                  prefix={this.props.converToCurrency.symbol}
                  disabled
                />
              </div>
            </div>

            <div className="column is-6">
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
