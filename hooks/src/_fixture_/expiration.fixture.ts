export const TEST_EXPIRATION = {
  empty: {
    month: '',
    year: ''
  },
  valid: {
    month: '11',
    year: '25'
  },
  invalid: {
    nonNumeric: '11d',
    length: '123',
    year: '23',
    past: {
      month: '03',
      year: '25'
    }
  }
};
