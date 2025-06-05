import React from "react";
import EventCard from "./EventCard";
import { useState, useEffect } from "react";
import eventsData from "../data/events";
import './FeaturedEvents.css';

const FeaturedEvents = () => {

    const [events, setEvents] = useState([]);
    const [searchWord, setSearchWord] = useState("");
    const sectionStyle = {
    backgroundImage: "linear-gradient(rgb(255, 251, 251), rgba(233, 228, 228, 0.67)), url('/bg2.avif')"}

    useEffect(() => {
        setEvents(eventsData);
    }, []);


    const searchedEvents = events.filter(event =>
        event.name.toLowerCase().includes(searchWord.toLowerCase()) ||
        event.location.toLowerCase().includes(searchWord.toLowerCase())
    );

    return (
        <section id="events" style={sectionStyle}>
            <h2>Featured Events</h2>
            <input
                type="text"
                placeholder="Search featured events..."
                className="featured-search"
                value={searchWord}
                onChange={(e) => setSearchWord(e.target.value)}
            />
            <div className="event-list">
                {searchedEvents.length > 0 ? (
                    searchedEvents.map((event, index) => (
                        <EventCard key={index} event={event} />
                    ))
                ) : (
                    <p style={{ textAlign: "center" }}>No events found.</p>
                )}
            </div>
        </section>
    );
}

export default FeaturedEvents
