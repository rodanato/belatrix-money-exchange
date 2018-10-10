// @flow
import React from "react";
import * as types from "../exchange.types";


const ExchangeBody = ({ onExchange }: types.ExchangeBodyProps) => (
  <section>
    <form>
      <input type="text" className="input" />
      <span />
      <button 
        type="button"
        className="button is-link" 
        onClick={() => onExchange('USD', 'EUR', 20)}>
        Calculate
      </button>
    </form>
  </section>
);

export default ExchangeBody;
