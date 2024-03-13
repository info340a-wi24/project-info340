import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Nav from './Nav';
import { getDatabase, ref, push } from 'firebase/database';
import MyEvents from './MyEvents';


export default function EventPage(props) {
  const loc = useLocation();
  const {title, location, description, startTime, image, alt, date} = loc.state;

  // handle registration
  function handleRegister(e) {
    e.preventDefault();
    console.log('You registered for this event.');

    const db = getDatabase();
    const dbRef = ref(db, 'my-events');

    if (e) {
        const regEvent = {
            title: {title},
            location: {location},
            description: {description},
            startTime: {startTime},
            image: {image},
            alt: {alt}
        }

        push(regEvent, dbRef)
        .catch((error) => console.log('Error: ', error));
    }
    <MyEvents />
};

  return(
    <div>
      <header style={{ backgroundImage: `url(${image})`, height: '450px' }}>
          <h1 className="BigEvent EventTitle">{title}</h1>
      </header>

      <main>
      <div className="event_info">
        <div className="Titles">
          <h5><div className="event_details"><strong className="colorTitle">Time: </strong> {date}</div></h5>
          <h5><div className="event_details"><strong className="colorTitle">Location: </strong>{location}</div></h5>
        </div>
        <h4><div className="event_description">{description}</div></h4>
        <button type="submit" onClick={handleRegister} className="btn btn-dark register">Register</button>
        </div>
      </main>
    </div>
  );
}