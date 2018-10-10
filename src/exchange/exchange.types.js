export type ExchangeProps = {};

export type ExchangeState = {};

export type ExchangeConverterProps = {
  onExchange: string,
  exchangedCurrency: number,
  baseCurrency: any,
  converToCurrency: any
};

export type ExchangeConverterState = {
  baseCurrencyValue: string,
  exchangedCurrency: string
};

export type ExchangeFormatter = {
  formattedValue: string,
  value: string | number
}