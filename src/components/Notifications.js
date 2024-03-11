import React, { useState } from 'react';
import NotificationCard from './NotificationCard';
import NotificationHeader from './NotificationHeader';
// import sampleData from '../data/sample';
import notifSample from '../data/notifSample.json';
import Footer from './footer';

const Notifications = () => {
  // the sort by read/unread in notif header
    const [sortOptions, setSortOptions] = useState('all');
    // notif header message counter
    const [messageCounter, setMessageCounter] = useState(notifSample.length);
    const [notifications, setNotifications] = useState(notifSample);

    // handle the change when a sort by is clicked in header
    const handleSortChange = (event) => {
      // needs to recognize when messages are read or unread
      setSortOptions(event.target.value);
    };

    // create a coppy of notifications then update the notification at that index
    const markAsRead = (index) => {
      // Update the notifDot and messageAlert count
      //if expand message is clicked decrease read count and also dont allow markAsRead to be clicked again
      // if expand is clicked, no mark as read. If marked as read it can still be expanded
      const updatedNotifications = [...notifications];
      updatedNotifications[index].isRead = true;
      setNotifications(updatedNotifications);
      // after notification has been marked decrease count
      setMessageCounter(messageCounter - 1);
    };

    // remove the notifcations
    const handleDelete = (notificationIndex, isRead, isExpanded) => {
      // after a message is removed message count may go down if it was unread
      const updatedNotifications = [...notifications];
      updatedNotifications.splice(notificationIndex, 1);
      setNotifications(updatedNotifications);
      // if deleted notif was unread/unexpanded decrease the counter
      if (!isRead && !isExpanded) {
        setMessageCounter(messageCounter - 1);
      }
    };

    //handle what happens when expand message is clicked
    const handleExpand = (index) => {
      // this should also mark the message as read
      const updatedNotifications = [...notifications];
      updatedNotifications[index].isExpanded = true;// Mark as read when expanding
      setNotifications(updatedNotifications);
    };


    // filter 
    const filterNotifs = notifications.filter((notification) => {
      if (sortOptions === 'unread') {
        return !notification.isRead && !notification.isExpanded;
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