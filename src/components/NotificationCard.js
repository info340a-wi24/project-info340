import React, { useState } from "react";
// in charge of the notification cards
// create varibles to track when the dropdown menu is clicked. on delete
// remove message like in bootstrap example.
// on read, update the state of the message. remove the red dot, update the count in the header
// on click expand the message to link to a new screen where it takes up the whole page
// create a way to get back?

// const testData = [
//   {clubLogo: "https://www.trumba.com/i/DgAH5Vl1PrjryrUrbwh5cfxf.jpg?w=300&h=300", clubName: "Husky Book Club", time: "22 mins ago", title: "Room change for meeting on 2/16", content: "more information about the notification that the group is sending out."}
// ]

const NotificationCard = ({ clubLogo, clubName, time, title, content, onMarkAsRead, onDelete }) => {
  const [isRead, setIsRead] = useState(false);

  const handleMarkAsRead = () => {
    setIsRead(true);
    onMarkAsRead();
  };

  const handleDelete = () => {
    onDelete();
  };

  return (
    <div className={`notifCard boxed col-md-6 col-xl-3 d-flex ${isRead ? 'read' : ''}`}>
      <img className="clubLogo" src={clubLogo} alt="clubPhoto" />
      <div className="notificationText">
        <div className="timeTitle">
          <h3>{clubName}</h3>
          <p id="notifTime">
            <small>{time}</small>
          </p>
        </div>
        <h4>{title}</h4>
        <p>{content}</p>
        <p>
          <a className="expand" href="#" >
            {' '}
            expand message...
          </a>
        </p>
      </div>
      <div className="deleteIcon">
        <button>...</button>
        <div className="dropdown-content">
          <a href="#" onClick={handleMarkAsRead}>Mark as Read</a>
          <a href="#" onClick={handleDelete}>Delete</a>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;