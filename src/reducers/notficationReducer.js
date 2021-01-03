const notificationReducer = (state = '', action) => {
  switch(action.type){
    case 'NEW_NOTIFICATION':
      return action.notification;
    default:
      return state;
  }
};

let timeoutId = null;

export const createNotification = (notificationMessage, waitingTime) => {
  return async dispatch => {
    dispatch({
      type: 'NEW_NOTIFICATION',
      notification: notificationMessage
    });
    if(timeoutId !== null){
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      dispatch({
        type: 'NEW_NOTIFICATION',
        notification: ''
      });
    }, waitingTime);
  };
};

export default notificationReducer;