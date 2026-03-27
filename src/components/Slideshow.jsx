import React, { useState, useEffect } from 'react';

const Slideshow = () => {
    const imagens = [
        "slides-1.jpg",
        "slides-2.png",
        "slides-3.jpg",
        "slides-4.png",
        "slides-5.png"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleForward = () => {
        setCurrentIndex((prevIndex) => {
            return prevIndex === imagens.length - 1 ? 0 : prevIndex + 1;
        });
    };

    const handleBack = () => {
        setCurrentIndex((prevIndex) => {
            return prevIndex === 0 ? imagens.length - 1 : prevIndex - 1;
        });
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            handleForward();
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div id="box0">
            <div id="slideShow">
                <img
                    id="slideShowImg"
                    src={imagens[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                />

                <button id="back" onClick={handleBack}>{'<'}</button>
                <button id="forward" onClick={handleForward}>{'>'}</button>
            </div>
        </div>
    );
};

export default Slideshow;