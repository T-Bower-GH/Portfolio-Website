import { useState, useEffect, useRef } from 'react';
import './Carousel.css';
import CarouselSlide from './CarouselSlide/CarouselSlide';

function setStartingIndex(startingIndex) {
    return startingIndex;
}

function Carousel({slides}) {
    const slidesToShow = setSlidesToShow();
    const totalSlides = slides.length;
    const finalSlideIndex = totalSlides - slidesToShow;
    const carouselInnerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(() => setStartingIndex(0));  // Return function used for performance (Makes starting index only render once as opposed to every time setIndex is changed)

    function decrementIndex() {
        setCurrentIndex(prevCurrentIndex => (prevCurrentIndex - 1 + (finalSlideIndex + 1)) % (finalSlideIndex + 1));
    }
    
    function incrementIndex() {
        setCurrentIndex(prevCurrentIndex => (prevCurrentIndex + 1) % (finalSlideIndex + 1));
    }

    useEffect(() => {
        const carouselInner = carouselInnerRef.current;
        const translateXBy = -currentIndex * (100 / slidesToShow) + '%';
        carouselInner.style.transform = `translateX(${translateXBy})`;
    }, [currentIndex, slidesToShow]);

    function setSlidesToShow() {
        return window.innerWidth <= 768 ? 1 : 4;
    }

    useEffect(() => {
        function handleResize() {
            setCurrentIndex(0); // Reset currentIndex on resize
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="carousel">
            <div className="carousel-inner" ref={carouselInnerRef}>
                {slides.map((slide, index) => (
                    <div className={`carousel-slide ${index === 0 ? 'active' : ''}`} key={index}>
                        <CarouselSlide {...slide} />
                    </div>
                ))}
            </div>
            <button className="carousel-control prev-button" onClick={() => decrementIndex()}>&#9664;</button>
            <button className="carousel-control next-button" onClick={() => incrementIndex()}>&#9654;</button>
        </div>
    );
}

export default Carousel