import React from 'react';

// Code heavily inspired by Problem Set 8 'PetList.js'
export function CardGrid(props) {
  const info = props.data || []; 

  /* const eventCards = info.slice(4).map((eventInfo, i) => {
    return <CardEvent key={i} data={info[i]} />;
  }) */

  let eventCards = [];
  // Only show four at a time
  for (let i = 0; i < 4; i++) {
    eventCards.push(<CardEvent key={i} data={info[i]}/>);
  }
  
  return (
      <div className="event-style">
        <div className="container row" style={{display: 'flex'}}>
          {eventCards}
        </div>
      </div>
  );
}

function CardEvent(props) {
    let info = props.data;

    return (
    <div className="col-md-6 col-xl-3 ">
      <div className="card mb-2">
          <div className="card-body">
              <div className="row me-2">
                  <div className="event_img">
                      <img className="event1" src={`${info.image}`} alt={info.alt} />
                  </div>

                  <div className="col-sm">
                      <h6 className="date">{info.date}</h6>
                      <h4 className="card-title">{info.title}</h4>
                      <p className="card-text">{info.description}</p>
                      <button className="btn btn-dark">Go to event</button>
                      <h6 className="card-notes">{info.hashtags}</h6>
                  </div>
              </div>
          </div>
      </div>
    </div>
    );    
}