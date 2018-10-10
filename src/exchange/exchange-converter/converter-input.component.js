// @flow
import React from "react";
import NumberFormat from "react-number-format";
import * as types from "../exchange.types";

const ConverterInput = ({symbol, onValueChange}: types.ConverterInputProps) => 
  <NumberFormat
    className={"input"}
    onValueChange={values => onValueChange(values)}
    thousandSeparator={true}
    decimalScale={4}
    prefix={symbol}
  />;

export default ConverterInput;