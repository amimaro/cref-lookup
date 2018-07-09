const assert = require('assert');
const crefLookup = require('../index.js');

describe('crefLookup query', () => {
  it('elements by name', () => {
    crefLookup
      .query({
        name: 'Silva'
      })
      .then(res => {
        assert(true, 'Success: ' + res);
      })
      .catch(err => {
        assert(false, 'Error: ' + err);
      });
  });
  it('elements by state', () => {
    crefLookup
      .query({
        state: 'PA'
      })
      .then(res => {
        assert(true, 'Success: ' + res);
      })
      .catch(err => {
        assert(false, 'Error: ' + err);
      });
  });
  it('elements by name and state', () => {
    crefLookup
      .query({
        name: 'Silva',
        state: 'PA'
      })
      .then(res => {
        assert(true, 'Success: ' + res);
      })
      .catch(err => {
        assert(false, 'Error: ' + err);
      });
  });
});
