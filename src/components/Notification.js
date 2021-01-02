import React from 'react';
import { useSelector } from 'react-redux';

const Notification = () => {
  const notifcationMessage = useSelector(state => state.notification);

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  };
  if(notifcationMessage === '')
    return null;
  return (
    <div style={style}>
      {notifcationMessage}
    </div>
  );
};

export default Notification;