import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText } from 'react-bootstrap';
import { getDatabase, ref, onValue } from 'firebase/database';

// Code heavily inspired by Problem Set 8 'PetList.js'
// ChatGPT helped debug this
// Handles card display on page
export function CardGrid(props) {
  //const info = props.data || [];
  /* const db = getDatabase();
  const postsRef = ref(db, 'posts');
  console.log(postsRef);

  const postsSnap = onValue(postsRef, (snapshot) => {
    const postsVal = snapshot.val();
    return postsVal;
  })
  console.log(postsSnap);

  const allPostsObj =  postsSnap;
  console.log(allPostsObj);
 
  const allPostsKeys = Object.keys(allPostsObj);
  console.log(allPostsKeys); */

  const [allPostsObj, setAllPostsObj] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const db = getDatabase();
      const postsRef = ref(db, 'posts');

      try {
        const snapshot = await onValue(postsRef, (snapshot) => {
          const postsVal = snapshot.val();
          if (postsVal) {
            setAllPostsObj(postsVal);
          }
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const allPostsKeys = Object.keys(allPostsObj);

  let eventCards = allPostsKeys.map((key) => {
    return <CardEvent id={key} key={key} data={allPostsObj[key]} />;
  })

  if (allPostsKeys.length === 0) {
    eventCards = <div className="event-style mb-5 p-5"><p>No registered events</p></div>
  }

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
    const formattedDate = format(new Date(info.startTime), 'MM/dd/yyyy');
    const newLink = info.image.slice(5);

    const navigate = useNavigate();
    function navigateTo(info) {
    navigate(info);
  }

    return (
    <div className="col-md-6 col-xl-3 ">
      <Card className="card mb-2">
        <CardBody>
            <div className="row me-2">
                <div className="event_img">
                    <CardImg className="event1" src={new URL(newLink)} alt={info.alt} />
                </div>

                <div className="col-sm">
                    <CardSubtitle className="date">{formattedDate}</CardSubtitle>
                    <CardTitle className="card-title">{info.title}</CardTitle>
                    <CardText className="card-text">{info.description}</CardText>
                    <button className="btn btn-dark" onClick={ () => navigateTo("/EventPage")}>Go to event</button>
                </div>
            </div>
        </CardBody>
      </Card>
    </div>
    );
}