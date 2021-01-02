const notificationReducer = (state = '', action) => {
  switch(action.type){
    case 'NEW_NOTIFICATION':
      return action.notification;
    default:
      return state;
  }
};


export const createNotification = (notificationMessage) => {
  return {
    type: 'NEW_NOTIFICATION',
    notification: notificationMessage
  };
};

export default notificationReducer;