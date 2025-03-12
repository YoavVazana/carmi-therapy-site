import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {

    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollButton(window.scrollY > 200);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        showScrollButton && (
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-6 right-6 bg-yellow-500 text-white p-3 rounded-full shadow-md hover:bg-yellow-600 focus:outline-none"
                style={{ zIndex: 1000 }}
            >
                <FaArrowUp />
            </button>
        )
    );
};

export default ScrollToTopButton;