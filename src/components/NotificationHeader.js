// This is in charge of the header of the page that updated how many
// messages there are and sorts the messages
// dropdown menu inspired by/ learned from: https://blog.hubspot.com/website/html-dropdown
import React from 'react';

const NotificationHeader = ({ onSortChange, messageCount }) => {
  return (
    <div className="notifHeader">
      <h2>Notifications</h2>
      <div className="messageAlert">
        <p>{messageCount} Messages</p>
        <div className="dropdown">
          <label htmlFor="drop-options">Sort By:</label>
          <select className="drop-options" id="drop-options" onChange={onSortChange}>
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
