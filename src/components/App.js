import React, { useEffect,  Navigate } from 'react';
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

// Import the functions you need from the SDKs                      you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
import { firebaseConfig } from '../config';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const postsRef = ref(db, 'posts');

export default function App(props) {
  // useEffect(() => {
  //   const EventRef = ref(db, 'posts');
  //   const posts = [
  //     {alt: "event1", description: "Join us for our annual event and explore Taiwan cuisines!", endtime: "Mon Mar 11 2024 17:00:00 GMT-0700 (Pacific Daylight Time)", image: "img/big.png", eventLocation: "HUB 224", startTime: "Fri Mar 22 2024 16:00:00 GMT-0700 (Pacific Daylight Time)", title: "Timeless Taiwan"}
  //   ];

  //   posts.forEach(post => {
  //     const newPostRef = push(ref(db, 'posts'));
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
          <Route path="/Notifications" element={<Notifications />} ref={postsRef} />
          <Route path="/Event/:eventId" element={<EventPage />} />
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Navigate to='/Home' />} />
      </Routes>
      <Footer />
    </div>
  );
}