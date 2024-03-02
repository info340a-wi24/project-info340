import React from 'react';
import { CardGrid } from './Card.js';

export default function MyEvents(props) {
    // Pretend we passed a prop
    const uData = [{title: "Timeless Taiwan", location: "HUB 224", date: "02/10/2024",description: "Join us for our annual event and explore Taiwan cuisines!", image: "img/big.png", alt: "Students attending event the previous year", hashtags: "#tosa #timelesstaiwan #nightmarket"},
                        {title: "iSchool Career Fair 2024", location: "HUB Ballroom", date: "02/14/2024", description: "Engage for opportunities to connect with employers from various industries!", image: "img/careerfair2.jpg", alt: "Students attending event the previous year", hashtags: "#job #internship #informatics #careerfair"},
                        {title: "HUB Winter Makers Fair", location: "HUB Walkway", date: "02/15/2024", description: "Explore crafts and items made by members of the UW community at the Winter Makers Fair!", image: "img/02_22_23_WinterMakersFair-07-1800x1013.jpg", alt: "Students attending event the previous year", hashtags: "#hub #makersfair #winter #creative #uwcommunity #uwcreatives"},
                        {title: "2024 Hack for Social Good", location: "Mary Gates Hall", date: "04/15/2024", description: "An in-person hackathon for high schoolers organized by iSchool student organizations!", image: "img/IMG_8514.PNG", alt: "Students attending event the previous year", hashtags: "#ischool #hackathon #ideas #winfo #iuga #binfo #uwdreamproject"}]

    // Pretend we passed a prop
    const pData = [{title: "WINFO Annual Hackathon 2024", location: "HUB 334", date: "01/27/2024",description: "Ideate and build creations with others within a 12-hour time period!", image: "img/hackathon4_1440.jpg", alt: "Students attending event the previous year", hashtags: "#ischool #hackathon #winfo"},
                        {title: "IUGA iArt Night", location: "HUB Ballroom", date: "01/09/2024", description: "Unleash your creativity by joining us for a relaxing evening with snacks!", image: "img/download.jpg", alt: "Poster of event with details", hashtags: "#iuga #art #newadmits"},
                        {title: "MASA Game Day", location: "HUB Walkway", date: "11/04/2023", description: "Let's roll the dice and strategize! Get your game face on and join us for board games.", image: "img/IMG_8513.PNG", alt: "Poster of event with details", hashtags: "#masa #boardgames #pizza"},
                        {title: "Quad Flicks: Mystery Movie", location: "HUB 224", date: "09/21/2023", description: "Get excited to join your fellow Huskies for a mystery movie on the Quad!", image: "img/quad-flick-231x300.png", alt: "Students attending event the previous year", hashtags: "#dawgdaze #movie #quadflick"}]

    return (
        <div>
            {/* insert navbar */}
            <header id="event-head">
                <div>
                    <h2>MY EVENTS</h2>
                </div>
            </header>

            <h3 className="event-title">Upcoming Events</h3>
            <CardGrid data={uData}/>

            <h3 className="event-title">Past Events</h3>
            <CardGrid data={pData}/>
        </div>
    );
}

//export default MyEvents;