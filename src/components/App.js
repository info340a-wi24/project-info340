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
import { getDatabase, ref, push} from 'firebase/database';


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


export default function App(props) {
  useEffect(() => {
    const EventRef = ref(db, 'events');
    const event = [
      {title: "Timeless Taiwan", location: "HUB 224", date: "Sat Feb 10 2024 14:30:00 GMT-0800 (Pacific Standard Time)",description: "Join us for our annual event and explore Taiwan cuisines!", image: "img/big.png", alt: "Students attending event the previous year", hashtags: "#tosa #timelesstaiwan #nightmarket"},
      {title: "iSchool Career Fair 2024", location: "HUB Ballroom", date: "Fri Mar 01 2024 16:30:00 GMT-0800 (Pacific Standard Time)", description: "Engage for opportunities to connect with employers from various industries!", image: "img/careerfair2.jpg", alt: "Students attending event the previous year", hashtags: "#job #internship #informatics #careerfair"},
      {title: "HUB Winter Makers Fair", location: "HUB Walkway", date: "Sat Mar 23 2024 16:30:00 GMT-0800 (Pacific Standard Time)", description: "Explore crafts and items made by members of the UW community at the Winter Makers Fair!", image: "img/02_22_23_WinterMakersFair-07-1800x1013.jpg", alt: "Students attending event the previous year", hashtags: "#hub #makersfair #winter #creative #uwcommunity #uwcreatives"},
      {title: "2024 Hack for Social Good", location: "Mary Gates Hall", date: "Sun May 05 2024 16:30:00 GMT-0800 (Pacific Standard Time)", description: "An in-person hackathon for high schoolers organized by iSchool student organizations!", image: "img/IMG_8514.PNG", alt: "Students attending event the previous year", hashtags: "#ischool #hackathon #ideas #winfo #iuga #binfo #uwdreamproject"}
    ];

    push(EventRef, event).then(() => {
      console.log("Data pushed successfully");
    }).catch((error) => {
      console.error("Error pushing data: ", error);
    });

    // This empty array as the second argument to useEffect tells React
    // to only execute the effect after the first render, making it run only once.
  }, []);


  return (
    <div>
        <Nav />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/CreateEvent" element={<Form />} />
          <Route path="/MyEvent" element={<MyEvents />} />
          <Route path="/Notifications" element={<Notifications />} />
          <Route path="Event" element={<EventPage />}/>
      </Routes>
      <Footer />
    </div>
  );
}