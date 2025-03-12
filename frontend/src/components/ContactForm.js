import React from 'react';

const ContactForm = ({
    formData,
    handleChange,
    handleSubmit,
    isSubmitting,
    responseMessage,
}) => (
    <form
        onSubmit={handleSubmit}
        className="col-span-2 shadow-lg rounded-lg p-8 space-y-4 w-full max-w-lg"
        style={{ backgroundColor: "#F0F8FF" }}
    >
        <label className="block text-4xl font-semibold text-gray-800 text-center">
            צור קשר
        </label>
        <div>
            <label className="block text-lg text-gray-700 mb-1" htmlFor="name">
                שם
            </label>
            <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-96 p-2 text-md border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-200"
                placeholder="הכנס שם מלא"
                required
            />
        </div>
        <div>
            <label className="block text-lg text-gray-700 mb-1" htmlFor="email">
                אימייל
            </label>
            <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-96 p-2 text-md border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-200"
                placeholder="הכנס כתובת אימייל"
                required
            />
        </div>
        <div>
            <label className="block text-lg text-gray-700 mb-1" htmlFor="phone">
                מספר טלפון
            </label>
            <input
                type="tel"
                id="phone"
                value={formData.phone || ""}
                onChange={handleChange}
                className="w-96 p-2 text-md border border-gray-300 text-right rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-200"
                placeholder="הכנס מספר טלפון"
                required
            />
        </div>
        <div>
            <label className="block text-lg text-gray-700 mb-1" htmlFor="message">
                פרטים נוספים שכדאי שאדע
            </label>
            <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="w-96 p-2 text-md border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-200"
                rows="2"
                placeholder="כתוב את ההודעה שלך כאן"
                required
            ></textarea>
        </div>
        <button
            type="submit"
            disabled={isSubmitting}
            className={`w-96 ${
                isSubmitting ? "bg-gray-400" : "bg-yellow-500 hover:bg-yellow-600"
            } text-white py-2 text-sm rounded-lg shadow-md`}
        >
            {isSubmitting ? "שולח..." : "חזרי אליי"}
        </button>
        {responseMessage && (
            <p className="text-center text-sm mt-2 text-gray-800">{responseMessage}</p>
        )}
    </form>
);

export default ContactForm;
