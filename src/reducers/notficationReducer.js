const notificationReducer = (state = '', action) => {
  switch(action.type){
    case 'NEW_NOTIFICATION':
      return action.notification;
    default:
      return state;
  }
};


export const createNotification = (notificationMessage, waitingTime) => {
  return async dispatch => {
    dispatch({
      type: 'NEW_NOTIFICATION',
      notification: notificationMessage
    });
    setTimeout(() => {
      dispatch({
        type: 'NEW_NOTIFICATION',
        notification: ''
      });
    }, waitingTime);
  };
};

export default notificationReducer;