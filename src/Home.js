import React, { useState, useEffect } from 'react';
import {useNavigate } from 'react-router-dom';
import Nav from './Nav'



const imageTextPair = [
  {url: '/img/big.png', text: "Timeless Taiwan"},
  {url: '/img/Hotpot.png', text: "Hotpot Together"},
  {url: '/img/Lantern.JPG', text: "Lantern Night"}
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

  const { url, text } = imageTextPair[currentIndex];

  // Navigation
  const navigate = useNavigate();
  function navigateTo(props) {
    navigate(props);
  }


  return (
    <div>
      <header style={{ backgroundImage: `url(${url})`, height: '550px' }}>
          <h1 className="BigEvent">{text}</h1>
          <div>
            <button className="btn bigEventBtn" onClick={ () => navigateTo("/EventPage")}> Go to event </button>
          </div>
      </header>
    </div>
  );
}
