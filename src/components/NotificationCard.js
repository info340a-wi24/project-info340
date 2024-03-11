import React, { useState } from "react";
// in charge of the notification cards
// create varibles to track when the dropdown menu is clicked. on delete
// remove message like in bootstrap example.
// on read, update the state of the message. remove the red dot, update the count in the header

const NotificationCard = ({ clubLogo, clubName, time, title, content, onMarkAsRead, onDelete, onExpand }) => {
  // is the notif read or not
  const [isRead, setIsRead] = useState(false);
  // has mark as read been clicked, automatically should be no
  const [markAsReadDisabled, setMarkAsReadDisabled] = useState(false);
  // has expand message been used
  const [isExpanded, setIsExpanded] = useState(false);
  // track the visibility of red notif dot
  const [showNotifDot, setShowNotifDot] = useState(true);

  const handleMarkAsRead = () => {
    if (!isRead && !markAsReadDisabled) {
    setMarkAsReadDisabled(true);
    setIsRead(true); ///
    // onMarkAsRead();
    setShowNotifDot(false);
    }
  };

  const handleDelete = () => {
    if(!isRead) {
      setShowNotifDot(false);
      // onMarkAsRead();
    }
    onDelete();
  };

  const handleExpand = () => {
    if (!isRead) {
      setMarkAsReadDisabled(true);
      setIsRead(true); ///
      onMarkAsRead();
    }
    setIsExpanded(!isExpanded);
    setShowNotifDot(false);
  };

  // only the first part of the message content should show until expand clicked
  const unexpandMessage = isExpanded ? content : content.substring(0, 100);

  return (
    <div className={`notifCard ${isRead ? 'read' : ''}`}>
      <img className="clubLogo" src={clubLogo} alt="clubPhoto" />
      <div className="notificationText" style={{paddingRight: '4rem'}}>
        <div className="timeTitle">
          <h3>{clubName}</h3>
          <p id="notifTime">
            <small>{time}</small>
          </p>
          {showNotifDot && <div class='notifDot'></div>}
        </div>
        <h4>{title}</h4>
        <p>{unexpandMessage}</p>
        {!isExpanded && (
        <p>
          <a className="expand" href="#" onClick={handleExpand}>
            {' '}
            expand message...
          </a>
        </p>
        )}
      </div>
      <div className="deleteIcon">
        <button >...</button>
        <div className="dropdown-content">
          <a href="#" onClick={handleMarkAsRead} disabled={markAsReadDisabled}>Mark as Read</a>
          <a href="#" onClick={handleDelete}>Delete</a>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;