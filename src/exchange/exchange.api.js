// @flow
const API_KEY: string = "477cee09dc8495653c6da843b5c87bd7";

export const exchangeFromTo = (from: string, to: string, amount: number) => {
  return fetch(
    `https://data.fixer.io/api/convert
    ?access_key=${API_KEY}
    &from=${from}
    &to=${to}
    &amount=${amount}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};
