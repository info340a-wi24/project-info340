import React from 'react';
import Nav from './Nav';


export default function EventPage() {
  const uData = [{
    title: "Timeless Taiwan",
    location: "HUB 224",
    date: "02/10/2024",
    description: "Attention everyone‼️ Brace yourselves for the exhilarating extravaganza of the year— TOSA’s annual event, TIMELESS TAIWAN: Journey Through Time! ✨⏳ Immerse yourself in the vibrant world of Taiwanese street food, classic night market games, and breathtaking performances🤩Stay tuned for more exciting updates...",
    image: "img/big.png",
    alt: "Students attending event the previous year",
    hashtags: "#tosa #timelesstaiwan #nightmarket"}];

  const { title, location, image, date, description } = uData[0];

  return(
    <div>
      <Nav />
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
        <a href="#" className="btn btn-dark register">Register</a>
      </div>
    </main>
    </div>
  );
}