// @flow
import React, { PureComponent } from "react";
import NumberFormat from "react-number-format";
import * as types from "./converter-output.types";

class ConverterOutput extends PureComponent<types.ConverterOutputProps, {}> {
  render() {
    return   <NumberFormat
    className="input"
    value={this.props.exchangedCurrency}
    displayType={"text"}
    decimalScale={4}
    thousandSeparator={true}
    prefix={this.props.symbol}
    disabled
  />
  }
}

export default ConverterOutput;