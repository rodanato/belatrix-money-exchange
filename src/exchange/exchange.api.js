// @flow
export const doExchangeFromTo = (from: string, to: string) => {
  return fetch(
    `https://free.currencyconverterapi.com/api/v6/convert?q=${from}_${to}&compact=y`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};
