import React from 'react';
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li className="WebName">Dawg Planner</li>
        <li><NavLink to='/Home' end className="pages">Home</NavLink></li>
        <li><NavLink to='/CreateEvent' end className="pages">Create Event</NavLink></li>
        <li><NavLink to='/MyEvent' end className="pages">My events</NavLink></li>
        <li><NavLink to='/Notification' end className="pages">Notifications</NavLink></li>
      </ul>
    </nav>
  );
}