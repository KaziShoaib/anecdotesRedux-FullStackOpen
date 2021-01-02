//test command -> set CI=true && npm test
//test coverage -> set CI=true && npm test -- --coverage
//report can be found on coverage/lcov-report


import filterReducer from './filterReducer';
import deepFreeze from 'deep-freeze';


describe('filterReducer', () => {
  test('by default filter is empty string', () => {
    const returnedState = filterReducer(undefined, 'NO_ACTION');
    expect(returnedState).toBe('');
  });

  test('filter can be changed', () => {
    const state = filterReducer(undefined, 'NO_ACTION');
    deepFreeze(state);
    const action = {
      type: 'SET_FILTER',
      filter: 'xyz'
    };
    const returnedState = filterReducer(state, action);
    expect(returnedState).toBe('xyz');
  });
});