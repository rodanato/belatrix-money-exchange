export type ExchangeProps = {};

export type ExchangeState = {};

export type ExchangeBodyProps = {
  onExchange: string,
  exchangedCurrency: number
};

export type ExchangeBodyState = {
  baseCurrency: string,
  baseCurrencyError: string,
  forcedSubmit: boolean
};
