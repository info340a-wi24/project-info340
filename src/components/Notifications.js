import React, { useState } from 'react';
import NotificationCard from './NotificationCard';
import NotificationHeader from './NotificationHeader';
import notifSample from '../data/notifSample.json';
import Footer from './footer';

const Notifications = () => {
  // the sort by read/unread in notif header
    const [sortOptions, setSortOptions] = useState('all');
    // notif header message counter. the length of the data
    const [messageCounter, setMessageCounter] = useState(notifSample.length);
    // notifications from data
    const [notifications, setNotifications] = useState(notifSample);

    // handle the change when a sort by is clicked in header
    const handleSortChange = (event) => {
      // needs to recognize when messages are read or unread
      setSortOptions(event.target.value);
    };

    // create a coppy of notifications then update the notification at that index
    const markAsRead = (index) => {
      // Update the notifDot and messageAlert count
      const updatedNotifications = [...notifications];
      updatedNotifications[index].isRead = true;
      setNotifications(updatedNotifications);
      // after notification has been marked decrease count
      // setMessageCounter(messageCounter - 1);
    };

    // remove the notifcations
    const handleDelete = (notificationIndex, isRead, isExpanded) => {
      // after a message is removed message count may go down if it was unread
      const updatedNotifications = [...notifications];
      updatedNotifications.splice(notificationIndex, 1);
      setNotifications(updatedNotifications);
      // if deleted notif was unread/unexpanded decrease the counter
      // if (!isRead && !isExpanded) {
        setMessageCounter(messageCounter - 1);
      // }
    };

    //handle what happens when expand message is clicked
    const handleExpand = (index) => {
      // this should also mark the message as read
      const updatedNotifications = [...notifications];
      // Mark as read when expanding
      updatedNotifications[index].isExpanded = true;
      setNotifications(updatedNotifications);
    };


    // filter 
    const filterNotifs = notifications.filter((notification) => {
      if (sortOptions === 'unread') {
        return !notification.isRead && !notification.isExpanded && !notification.isDeleted;
      } else if (sortOptions === 'read') {
        return notification.isRead || notification.isExpanded;
      } else {
        return !notification.isDeleted; 
      }
  });


  return (
    <div>
      <section>

        <div className="notifHeader">
        <NotificationHeader onSortChange={handleSortChange} messageCount={messageCounter} />
        </div>

        <div className="container" id="notificationsContainer">
          {filterNotifs.map((notification, index) => (
            <NotificationCard
            key={index}
            clubLogo={notification.clubLogo}
            clubName={notification.clubName}
            time={notification.time}
            title={notification.title}
            content={notification.content}
            onMarkAsRead={() => markAsRead(index)}
            onDelete={() => handleDelete(index, notification.isRead, notification.isExpanded)}
            onExpand={() => handleExpand(index)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Notifications;