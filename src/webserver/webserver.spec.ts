import { expect } from 'chai';
import 'mocha';
const rp = require('request-promise-native');

const host = 'http://localhost:3000/';

describe('API server tests', () => {
  it('GET customer by id', () => {
    const endpoint = 'api/customer/5';
    return rp(`${host}${endpoint}`)
        .then(res => {
          const expected = '{"id":1,"email":"joe@apple.com","firstName":"Joe","status":"Active","phoneNumbers":["8012318713"]}';
          expect(res).to.equal(expected);
        });
  });

});
