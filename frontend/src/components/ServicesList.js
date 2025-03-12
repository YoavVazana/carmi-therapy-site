import React from 'react';
import axios from 'axios';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/services')
            .then(response => setServices(response.data))
            .catch(error => console.error('Error fetching services:', error));
    }, []);

    return (
        <section className="bg-yellow-50 py-10">
            <h2 className="text-3xl font-bold text-gray-700 mb-6">השירותים שלנו</h2>
            <ul className="space-y-6 max-w-4xl mx-auto">
                {services.map(service => (
                    <li
                        key={service.id}
                        className="bg-white p-4 rounded-lg shadow border border-yellow-100"
                    >
                        <h3 className="text-xl font-semibold text-gray-800">{service.name}</h3>
                        <p className="text-gray-600 mt-2">{service.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Services;
