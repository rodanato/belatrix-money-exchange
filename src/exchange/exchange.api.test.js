import {doExchangeFromTo} from './exchange.api';

describe('Exchange API', () => {
  it('Returns the conversion rate', () => {
    return doExchangeFromTo('USD', 'EUR')
    .then(res => res.json())
    .then(res => expect(res['USD_EUR'].val).toBeDefined()); 
  });

  it('should reject if there is no parameters', async() => {
    // return doExchangeFromTo('USD', 'EUR')
    // .catch(e => expect(e).toBeTruthy());
    expect.assertions(1);

    try {
      await doExchangeFromTo()
    } catch (e) {
      expect(e).toBeTruthy()
    }
  });
});
