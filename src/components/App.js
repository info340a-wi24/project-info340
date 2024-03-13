import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import EventPage from './EventPage';
import Nav from './Nav';
import Form from './CreateEvent';
import MyEvents from './MyEvents';
import Footer from './footer';
import Notifications from './Notifications';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";
import { getDatabase, ref, push, set} from 'firebase/database';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default function App(props) {
  // useEffect(() => {
  //   const EventRef = ref(db, 'dataHome');
  //   const dataHome = [
  //     {
  //       alt: "Students attending Timeless Taiwan event",
  //       description: "Join us for our annual event and explore Taiwan cuisines!",
  //       endtime: "Fri Mar 22 2024 17:00:00 GMT-0700 (Pacific Daylight Time)",
  //       image: "img/big.png",
  //       location: "HUB 224",
  //       startTime: "Fri Mar 22 2024 16:00:00 GMT-0700 (Pacific Daylight Time)",
  //       title: "Timeless Taiwan"
  //     },
  //     {
  //       alt: "Enjoying Hotpot Together",
  //       description: "Warm up with us with a variety of hotpot flavors!",
  //       endtime: "Sat Mar 23 2024 20:00:00 GMT-0700 (Pacific Daylight Time)",
  //       image: "img/Hotpot.png",
  //       location: "HUB 201",
  //       startTime: "Sat Mar 23 2024 18:00:00 GMT-0700 (Pacific Daylight Time)",
  //       title: "Hotpot Together"
  //     },
  //     {
  //       alt: "Lantern Night celebration",
  //       description: "Experience the beauty of Lantern Night with us.",
  //       endtime: "Sun Mar 24 2024 22:00:00 GMT-0700 (Pacific Daylight Time)",
  //       image: "img/Lantern.JPG",
  //       location: "HUB 301",
  //       startTime: "Sun Mar 24 2024 19:00:00 GMT-0700 (Pacific Daylight Time)",
  //       title: "Lantern Night"
  //     },
  //     {
  //       alt: "Career Fair 2024",
  //       description: "Connect with potential employers at our annual Career Fair.",
  //       endtime: "Mon Mar 25 2024 17:00:00 GMT-0700 (Pacific Daylight Time)",
  //       image: "img/careerfair2.jpg",
  //       location: "HUB Ballroom",
  //       startTime: "Mon Mar 25 2024 12:00:00 GMT-0700 (Pacific Daylight Time)",
  //       title: "Career Fair 2024"
  //     }
  //   ];

  //   dataHome.forEach(post => {
  //     const newPostRef = push(ref(db, 'dataHome'));
  //     set(newPostRef, post);
  //   });

  //   // This empty array as the second argument to useEffect tells React
  //   // to only execute the effect after the first render, making it run only once.
  // }, []);


  return (
    <div>
      <Nav />
      <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/CreateEvent" element={<Form />} />
          <Route path="/MyEvent" element={<MyEvents />} />
          <Route path="/Notifications" element={<Notifications />} />
          <Route path="/EventPage/:eventId" element={<EventPage />} />
      </Routes>
      <Footer />
    </div>
  );
}