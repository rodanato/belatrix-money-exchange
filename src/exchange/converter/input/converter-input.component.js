// @flow
import React, { PureComponent } from "react";
import NumberFormat from "react-number-format";
import * as types from "./converter-input.types";

class ConverterInput extends PureComponent<types.ConverterInputProps, {}> {
  render() {
    return <NumberFormat
    className={"input"}
    onValueChange={values => this.props.onValueChange(values)}
    thousandSeparator={true}
    decimalScale={4}
    prefix={this.props.symbol}
  />;
  }
}

export default ConverterInput;