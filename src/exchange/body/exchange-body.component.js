// @flow
import React, { Component } from "react";
import * as types from "../exchange.types";

// const pattern = "^[\\d]+([\\.,][0-9]{1,2})?$";
const pattern = /^(?!\(.*[^)]$|[^(].*\)$)\(?\$?(0|[1-9]\d{0,2}(,?\d{3})?)(\.\d\d?\d?\d?)?\)?$/;

class ExchangeBody extends Component<
  types.ExchangeBodyProps,
  types.ExchangeBodyState
> {
  state = {
    baseCurrency: "",
    baseCurrencyError: false,
    forcedSubmit: false
  };

  handleBaseCurrency = (event: any) => {
    const passPatternValidation = event.target.value.match(pattern) !== null;

    if (passPatternValidation) {
      this.setState({
        baseCurrency: event.target.value,
        baseCurrencyError: false
      });
    } else {
      this.setState({
        baseCurrency: "",
        baseCurrencyError: !passPatternValidation
      });
    }
  };

  handleSubmit = (event: any) => {
    this.setState({ forcedSubmit: true });

    if (this.state.baseCurrency !== "") {
      this.props.onExchange("USD", "EUR", this.state.baseCurrency);
    }
    event.preventDefault();
  };

  inputHasAnError = () =>
    this.state.baseCurrencyError && this.state.forcedSubmit;

  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <div className="columns is-multiline is-centered">
            <div className="column is-6">
              <div className="control">
                <label className="label">USD</label>
                <input
                  type="text"
                  onChange={this.handleBaseCurrency}
                  className={
                    this.inputHasAnError() ? "input is-danger" : "input"
                  }
                />
                <span
                  className={this.inputHasAnError() ? "help is-danger" : "help"}
                >
                  El formato es inválido
                </span>
              </div>
            </div>

            <div className="column is-6">
              <div className="control">
                <label className="label">EUR</label>
                <input
                  className="input"
                  value={this.props.exchangedCurrency}
                  type="text"
                  placeholder="Disabled input"
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

export default ExchangeBody;
