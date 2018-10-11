import {doExchangeFromTo} from './exchange.api';

describe('Exchange API', () => {
  it('Should return the conversion rate', () => {
    return doExchangeFromTo('USD', 'EUR')
      .then(res => res.json())
      .then(res => expect(res['USD_EUR']).toBeDefined()); 
  });

  it('Should fail if the parameters are not well settled', () => {
    return doExchangeFromTo('xxx', 'yyy')
      .then(res => res.json())
      .then(res => expect(res['USD_EUR']).toBeUndefined()); 
  });
});
