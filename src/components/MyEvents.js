import React from 'react';
import { CardGrid } from './Card.js';

export default function MyEvents() {

    return (
        <div>
            <header className="event-head">
                <div>
                    <h2>My Events</h2>
                </div>
            </header>

            <h3 className="event-title">Registered Events</h3>
            <CardGrid dataRef={'my-events'}/>
        </div>
    );
}