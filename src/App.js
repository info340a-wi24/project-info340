import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import EventPage from './EventPage';
import Nav from './Nav';
import Form from './CreateEvent';

export default function App(props) {
  return (
    <div>
        <Nav />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/CreateEvent" element={<Form />} />
          {/* <Route path="/MyEvent" element={<MyEventComponent />} /> */}
          {/* <Route path="/Notification" element={<NotificationComponent />} /> */}
          <Route path="/EventPage" element={<EventPage />} />
      </Routes>
    </div>
  );
}