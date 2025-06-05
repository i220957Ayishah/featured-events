import React from 'react'
import './Hero.css';
import { useState, useEffect } from 'react';

const Hero = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        '/events/event1.jpg',
        '/events/event2.jpeg',
        '/events/event4.webp',
        '/events/event3.jpg',]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => {
                const newIndex = (prevIndex + 1) % images.length;
                    return newIndex;
            });
        }, 10000);
        return () => clearInterval(interval);
    }, [images.length]);

    const goToPrevious = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToSlide = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <div id='home'>
            <div className="image-slider">
                <button
                    className="slider-button prev"
                    onClick={goToPrevious}
                    aria-label="Previous slide"
                >
                    ❮
                </button>
                <div className="slider-container">
                    <img
                        src={images[currentImageIndex]}
                        alt={`Slide ${currentImageIndex + 1}`}
                        className="slider-image"
                        onError={(e) => {
                            e.target.src = '/images/fallback-image.jpg';
                            console.error(`Failed to load image: ${images[currentImageIndex]}`);
                        }}
                    />
                    <div className="hero-text">
                        DISCOVER EVENTS NEAR YOU!
                    </div>
                </div>
                <button
                    className="slider-button next"
                    onClick={goToNext}
                    aria-label="Next slide"
                >
                    ❯
                </button>
                <div className="slider-dots">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Hero
