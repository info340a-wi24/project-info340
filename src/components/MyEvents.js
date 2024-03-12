import React from 'react';
import { CardGrid } from './Card.js';
import { getDatabase, ref, onValue, get } from 'firebase/database';

export function MyEvents() {

    return (
        <div>
            <header id="event-head">
                <div>
                    <h2>My Events</h2>
                </div>
            </header>

            <h3 className="event-title">Registered Events</h3>
            <CardGrid dataRef={'my-events'}/>
        </div>
    );
}

/* function handleRegister(e) {
    e.preventDefault();
    console.log('You registered for this event.');

    const db = getDatabase();
    const dbRef = ref(db, 'my-events');

    if (e) {
        const loc = useLocation();
        const {title, location, description, startTime, image, alt} = loc.state;
        
        const regEvent = {
            title: {title},
            location: {location},
            description: {description},
            startTime: {startTime},
            image: {image},
            alt: {alt}
        }

        push(regEvent, dbRef)
        .catch((error) => console.log('Error: ', error));
    }
}; */