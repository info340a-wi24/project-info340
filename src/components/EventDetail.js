import React from 'react';


export default function(props) {


  return (
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
        <a href="#" className="btn btn-dark register">Register</a>
      </div>
    </main>
    </div>
  );
}