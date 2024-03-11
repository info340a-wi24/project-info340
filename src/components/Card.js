import React from 'react';
import {useNavigate } from 'react-router-dom';
import { Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText } from 'react-bootstrap';


// Code heavily inspired by Problem Set 8 'PetList.js'
// Handles card display on page
export function CardGrid(props) {
  const info = props.data || [];

  const eventCards = info.map((eventInfo, i) => {
    return <CardEvent key={i} data={eventInfo} />;
  })


  return (
      <div className="event-style">
        <div className="container row" style={{display: 'flex'}}>
          {eventCards}
        </div>
      </div>
  );
}

// Creates event cards
function CardEvent(props) {
    let info = props.data;

    const navigate = useNavigate();
    function navigateToEventPage() {
      navigate('/EventPage', { state: { ...info } });
    }

    return (
    <div className="col-md-6 col-xl-3 ">
      <Card className="card mb-2">
        <CardBody>
            <div className="row me-2">
                <div className="event_img">
                    <CardImg className="event1" src={`${info.image}`} alt={info.alt} />
                </div>

                <div className="col-sm">
                    <CardSubtitle tag="h6" className="date">{info.date}</CardSubtitle>
                    <CardTitle tag="h4" className="card-title">{info.title}</CardTitle>
                    <CardText tag="p" className="card-text">{info.description}</CardText>
                    <button className="btn btn-dark" onClick={ () => navigateToEventPage(info)}>Go to event</button>
                    <CardSubtitle tag="h6" className="card-notes">{info.hashtags}</CardSubtitle>
                </div>
            </div>
        </CardBody>
      </Card>
    </div>
    );
}