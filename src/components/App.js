import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import EventPage from './EventPage';
import Nav from './Nav';
import Form from './CreateEvent';
import MyEvents from './MyEvents';
import Footer from './footer';
import Notifications from './Notifications';

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from '../config';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function App(props) {
  return (
    <div>
      <Nav />
      <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/CreateEvent" element={<Form />} />
          <Route path="/MyEvent" element={<MyEvents />} />
          <Route path="/Notifications" element={<Notifications />} />
          <Route path="/EventPage" element={<EventPage />} />
          <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}