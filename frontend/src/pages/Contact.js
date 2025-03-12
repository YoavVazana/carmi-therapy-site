import React from 'react';
import ContactForm from '../components/ContactForm';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import styles from '../styles/Contact.module.css';

const Contact = ({
    formData,
    handleChange,
    handleSubmit,
    isSubmitting,
    responseMessage,
}) => (
    <section id="contact" className={`${styles.contactSection}`}>
        <div className="container mx-auto grid grid-cols-3 gap-8">
            {/* פרטי יצירת קשר */}
            <div className={`col-span-1 shadow-lg rounded-lg p-8 space-y-4 w-full max-w-lg ${styles.contactDetails}`}>
                <h2 className="text-4xl font-semibold text-gray-800 text-center">
                    פרטי יצירת קשר
                </h2>
                <div className="space-y-20">
                    <div className="flex items-center text-gray-700">
                        <FaMapMarkerAlt className="text-yellow-500 mr-2" />
                        <p className="text-lg">מושב שורש, מטה יהודה</p>
                    </div>
                    <div className="flex items-center text-gray-700">
                        <FaPhone className="text-yellow-500 mr-2" />
                        <a href="tel:0542223318" className="text-lg underline hover:text-yellow-500">
                            054-222-3318
                        </a>
                    </div>
                    <div className="flex items-center text-gray-700">
                        <FaEnvelope className="text-yellow-500 mr-2" />
                        <a href="mailto:your_email@example.com" className="text-lg underline hover:text-yellow-500">
                            your_email@example.com
                        </a>
                    </div>
                </div>
            </div>

            {/* טופס יצירת קשר */}
            <ContactForm
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                isSubmitting={isSubmitting}
                responseMessage={responseMessage}
            />
        </div>
    </section>
);

export default Contact;
