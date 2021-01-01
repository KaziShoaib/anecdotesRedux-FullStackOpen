//test command -> set CI=true && npm test
//test coverage -> set CI=true && npm test -- --coverage
//report can be found on coverage/lcov-report

import deepFreeze from 'deep-freeze';
import reducer from './anecdoteReducer';

const initialState = [
  {
    content: 'If it hurts, do it more often',
    votes: 0,
    id: 1
  },
  {
    content: 'Adding manpower to a late software project makes it later!',
    votes: 0,
    id: 2
  }
];


describe('anecdoteReducer', () => {
  test('should return a proper initial state when called with undefined state', () => {
    const anecdotes = reducer(undefined, 'DO_NOTHING');
    expect(anecdotes.map(a => a.content)).not.toHaveLength(0);
  });


  test('vote is increased', () => {
    const state = initialState;
    const action = {
      type:'VOTE',
      data:{
        id: 1
      }
    };
    deepFreeze(state);
    const newState = reducer(state, action);
    expect(newState[0].votes).toBe(1);
  });


  test('new anecdote is added', () => {
    const state = initialState;
    const action = {
      type: 'NEW_ANECDOTE',
      data: {
        content: 'Premature optimization is the root of all evil.',
        votes: 0,
        id: 3
      }
    };
    deepFreeze(state);
    const newState = reducer(state, action);
    expect(newState).toHaveLength(3);
    expect(newState).toContainEqual(action.data);
  });

});