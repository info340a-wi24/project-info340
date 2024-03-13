import React, {useState}  from 'react';
import { NavLink } from "react-router-dom";
import { BsChevronDoubleLeft } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";

export default function Nav() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav>
      <FiMenu className="icon" onClick={toggleMenu}/>
      <img src="./img/favicon.ico" alt='website icon' className='websiteIcon'></img>
      <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`}>    
        <li className="WebName">Dawg Planner</li>
        <li><NavLink to='/Home' end className="pages">Home</NavLink></li>
        <li><NavLink to='/CreateEvent' end className="pages">Create Event</NavLink></li>
        <li><NavLink to='/MyEvent' end className="pages">My events</NavLink></li>
        <li><NavLink to='/Notifications' end className="pages">Notifications</NavLink></li>
        <BsChevronDoubleLeft className='close-icon' onClick={closeMenu}/>
      </ul>
    </nav>
  );
}