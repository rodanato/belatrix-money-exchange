// @flow
import React from "react";
import NumberFormat from "react-number-format";
import * as types from "../exchange.types";

const ConverterOutput = ({ symbol, exchangedCurrency }: types.ConverterOutputProps) => (
  <NumberFormat
    className="input"
    value={exchangedCurrency}
    displayType={"text"}
    decimalScale={4}
    thousandSeparator={true}
    prefix={symbol}
    disabled
  />
);

export default ConverterOutput;
