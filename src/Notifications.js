import React, { useState } from 'react';
import NotificationCard from './NotificationCard';
import NotificationHeader from './NotificationHeader';
import Footer from './footer';

const Notifications = () => {
    const [sortOptions, setSortOptions] = useState('all');
    const [messageCounter, setMessageCounter] = useState(0);
    const [notifications, setNotifications] = useState([
        // Define notifications data here
      ]);
    
      // handle the change when a sort by is clicked in header
      const handleSortChange = () => {
        // setSortOptions(.target.value);
        // sorting logic here based on option clicked
      }

      const markAsRead = () => {
        // Update the notifDot and messageAlert count
        // if mark as read is cicked, decrease message count 
        setMessageCounter(messageCounter - 1);
      };
    
      const deleteNotification = () => {
        // Remove the notification card from the state
        // after a message is removed message count may go down if it was unread
        setMessageCounter(messageCounter - 1);
      };

      //handle what happens when expand message is clicked
      const handleExpand = () => {
        // on click, expand page in acoridan style
      };

  return (
    <div>
      <section>

        <div className="notifHeader">
        <NotificationHeader onSortChange={handleSortChange} messageCount={messageCounter} />
        </div>

        <div className="container" id="notificationsContainer">
          <NotificationCard
            clubLogo="https://www.trumba.com/i/DgAH5Vl1PrjryrUrbwh5cfxf.jpg?w=300&h=300"
            clubName="Husky Book Club"
            time="22 mins ago"
            title="Room change for meeting on 2/16"
            content="more information about the notification that the group is sending out."
          />

          <NotificationCard
            clubLogo="https://ischool.uw.edu/fb-300x300.png"
            clubName="Winfo"
            time="46 mins ago"
            title="Hackathon Signup Open!"
            content="more information about the notification that the group is sending out."
          />

          <NotificationCard
            clubLogo="https://ischool.uw.edu/fb-300x300.png"
            clubName="Winfo"
            time="4 hrs ago"
            title="Fundraiser on 3/12"
            content="more information about the notification that the group is sending out."
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Notifications;