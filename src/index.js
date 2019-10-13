import { flow, includes, first } from 'lodash/fp';

const symbol = '.,!?'.split('');

const startWithSymbol = (word) => (
  flow(
    first(word),
    includes(symbol),
  )
);

console.log(startWithSymbol('Hello'));
