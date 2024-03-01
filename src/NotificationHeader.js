import React from 'react';

const NotificationHeader = ({ onSortChange, messageCount }) => {
  return (
    <div className="notifHeader">
      <h3>Notifications</h3>
      <div className="messageAlert">
        <p>{messageCount} New Messages</p>
        <div className="dropdown">
          <label htmlFor="drop-options">Sort By:</label>
          <select name="drop-options" id="drop-options" onChange={onSortChange}>
            <option value="all">All (default)</option>
            <option value="unread">Unread</option>
            <option value="read">Read</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default NotificationHeader;
