import React from 'react';
import './EventCard.css';

const EventCard = ({ event }) => {
    return (
        <div className="event-card">
            <div className="event-image">
                <img
                    src={event.image || '/events/default-event.jpg'} // Add an image field in events.json or use a default
                    alt={event.name}
                />
            </div>
            <div className="event-desc">
                <h3>{event.name}</h3>
                <p>{event.description}</p>
            </div>
            <div className="details">
                <p><span className="icon">📅</span> <strong>Date:</strong> {event.date}</p>
                <p><span className="icon">⏰</span> <strong>Time:</strong> {event.time}</p>
                <p><span className="icon">📍</span> <strong>Location:</strong> {event.location}</p>
            </div>
            <button id="reg">Register</button>
        </div>
    );
};

export default EventCard;