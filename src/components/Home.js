import React, { useState, useEffect } from 'react';
import {useNavigate } from 'react-router-dom';
import { CardGrid } from './Card';



const imageTextPair = [
  {title: "Timeless Taiwan", eventLocation: "HUB 224", date: "Sat Feb 10 2024 14:30:00 GMT-0800 (Pacific Standard Time)",description: "Join us for our annual event and explore Taiwan cuisines!", image: "img/big.png", alt: "Students attending event the previous year"},
  {title: "Hotpot Together", eventLocation: "HUB ", date: "Sat Feb 10 2024 14:30:00 GMT-0800 (Pacific Standard Time)",description: "Join us for our annual event and explore hotpot!", image: '/img/Hotpot.png', alt: "Students attending event the previous year"},
  {title: "Lantern Night", eventLocation: "HUB ", date: "Sat Feb 10 2024 14:30:00 GMT-0800 (Pacific Standard Time)",description: "Join us for our annual event and explore hotpot!", image: '/img/Lantern.JPG', alt: "Students attending event the previous year"},
];


export default function Home() {
  // Image changing function
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % imageTextPair.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const { image, title } = imageTextPair[currentIndex];

  // Navigation
  const navigate = useNavigate();
  function navigateToEventPage() {
    const eventData = imageTextPair[currentIndex];
    navigate('/EventPage', { state: eventData });
  }

  // Data
  const uData = [{title: "Timeless Taiwan", location: "HUB 224", date: "02/10/2024",description: "Join us for our annual event and explore Taiwan cuisines!", image: "img/big.png", alt: "Students attending event the previous year", hashtags: "#tosa #timelesstaiwan #nightmarket"},
                        {title: "iSchool Career Fair 2024", location: "HUB Ballroom", date: "02/14/2024", description: "Engage for opportunities to connect with employers from various industries!", image: "img/careerfair2.jpg", alt: "Students attending event the previous year", hashtags: "#job #internship #informatics #careerfair"},
                        {title: "HUB Winter Makers Fair", location: "HUB Walkway", date: "02/15/2024", description: "Explore crafts and items made by members of the UW community at the Winter Makers Fair!", image: "img/02_22_23_WinterMakersFair-07-1800x1013.jpg", alt: "Students attending event the previous year", hashtags: "#hub #makersfair #winter #creative #uwcommunity #uwcreatives"},
                        {title: "2024 Hack for Social Good", location: "Mary Gates Hall", date: "04/15/2024", description: "An in-person hackathon for high schoolers organized by iSchool student organizations!", image: "img/IMG_8514.PNG", alt: "Students attending event the previous year", hashtags: "#ischool #hackathon #ideas #winfo #iuga #binfo #uwdreamproject"}]

  return (
    <div>
      <header style={{ backgroundImage: `url(${image})`, height: '550px' }}>
        <div className="titleWBtn">
          <h1 className="BigEvent">{title}</h1>
          <div>
          <button className="btn bigEventBtn" onClick={navigateToEventPage}>Go to event</button>
          </div>
        </div>
      </header>

      <main>
        <CardGrid data={uData} />
      </main>
    </div>
  );
}
