import React from 'react';
import Nav from './Nav';


export default function EventPage() {
  return(
    <div>
      <Nav />
      <header style={{ backgroundImage: `./img/big.png`, height: '450px' }}>
          <h1 className="BigEvent EventTitle">Timeless Taiwan</h1>
      </header>

      <main>
      <div className="event_info">
        <div className="Titles">
          <h5><div className="event_details"><strong className="colorTitle">Time: </strong> 2024.03.09 (Sat) 19:30 - 20:20</div></h5>
          <h5><div className="event_details"><strong className="colorTitle">Location: </strong>After purchase completed, you can enter the live stream from the ticket page.</div></h5>
        </div>
        <h4><div className="event_description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div></h4>
        <a href="#" className="btn btn-dark register">Register</a>
      </div>
    </main>
    </div>
  );
}