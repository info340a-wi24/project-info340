import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Nav from './Nav';
import { getDatabase, ref, onValue } from 'firebase/database';


export default function EventPage(props) {
  const { eventId } = useParams();
  const [eventData, setEventData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const db = getDatabase();
    const eventRef = ref(db, `posts/${eventId}`);

    onValue(eventRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setEventData(data);
      }
    }, {
      onlyOnce: true
    });
  }, [eventId]);

  if (!eventData) {
    return <div>Loading...</div>;
  }

  const { title, eventLocation, description, image, date } = eventData;

  return(
    <div>
      <header style={{ backgroundImage: `url(${image})`, height: '450px' }}>
          <h1 className="BigEvent EventTitle">{title}</h1>
      </header>

      <main>
      <div className="event_info">
        <div className="Titles">
          <h5><div className="event_details"><strong className="colorTitle">Time: </strong> {date}</div></h5>
          <h5><div className="event_details"><strong className="colorTitle">Location: </strong>{eventLocation}</div></h5>
        </div>
        <h4><div className="event_description">{description}</div></h4>
        <a href="#" className="btn btn-dark register">Register</a>
        </div>
      </main>
    </div>
  );
}