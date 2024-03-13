import React, { Navigate } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import EventPage from './EventPage';
import Nav from './Nav';
import Form from './CreateEvent';
import MyEvents from './MyEvents';
import Footer from './footer';
import Notifications from './Notifications';

// Import the functions you need from the SDKs                      you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
import { firebaseConfig } from '../config';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const postsRef = ref(db, 'posts');

export default function App(props) {
  
  return (
    <div>
      <Nav />
      <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/CreateEvent" element={<Form />} />
          <Route path="/MyEvent" element={<MyEvents />} />
          <Route path="/Notifications" element={<Notifications />} ref={postsRef} />
          <Route path="/EventPage" element={<EventPage />} />
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Navigate to='/Home' />} />
      </Routes>
      <Footer />
    </div>
  );
}