//test command -> set CI=true && npm test
//test coverage -> set CI=true && npm test -- --coverage
//report can be found on coverage/lcov-report


import notificationReducer from './notficationReducer';
import deepFreeze from 'deep-freeze';

describe('notificationReducer', () => {
  test('by default notification is empty string', () => {
    const returnedState = notificationReducer(undefined, 'NO_ACTION');
    expect (returnedState).toBe('');
  });

  test('new notification message can be created', () => {
    const state = notificationReducer(undefined, 'NO_ACTION');
    deepFreeze(state);
    const action = {
      type:'NEW_NOTIFICATION',
      notification:'notification message'
    };
    const returnedState = notificationReducer(state, action);
    expect(returnedState).toBe(action.notification);
  });
});
