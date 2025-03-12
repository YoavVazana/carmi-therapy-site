import React, { useState, useEffect } from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import ScrollToTopButton from './components/Button';


const App = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');
    const [navbarTransparent, setNavbarTransparent] = useState(true);
    

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setResponseMessage('');

        try {
            const response = await fetch('http://localhost:5000/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const responseData = await response.json();

            if (response.status === 200) {
                setResponseMessage('ההודעה נשלחה בהצלחה!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setResponseMessage(responseData.error || 'אירעה שגיאה. נסה שוב מאוחר יותר.');
            }
        } catch (error) {
            console.error('Error:', error);
            setResponseMessage('אירעה שגיאה. נסה שוב מאוחר יותר.');
        } finally {
            setIsSubmitting(false);
        }
    };
    

    useEffect(() => {
        const handleScroll = () => {
            setNavbarTransparent(window.scrollY <= window.innerHeight - 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <div style={{ backgroundColor: '#fdf5e6', minHeight: '100vh' }}>
            {/* Navbar */}
            <Navbar transparent={navbarTransparent} />

            {/* Hero Carousel */}
            <HeroCarousel />

            <Home/>

            <About/>

            <Services/>

            <Contact
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                isSubmitting={isSubmitting}
                responseMessage={responseMessage}
            />

           
            <ScrollToTopButton />

        </div>
        
    );
};

export default App;
