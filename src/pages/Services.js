import React, { useState } from 'react';
import Pagination from '../components/Pagination';

function Services() {
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 3;

  const services = [
    { name: 'Service 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Service 2', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { name: 'Service 3', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
    { name: 'Service 4', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.' },
    { name: 'Service 5', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.' },
    { name: 'Service 6', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Service 7', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { name: 'Service 8', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
    { name: 'Service 9', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.' },
  ];

  // Get current services
  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = services.slice(indexOfFirstService, indexOfLastService);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
    <div className="space-y-16">
        <section className="bg-cover bg-center h-screen flex items-center" style={{backgroundImage: "url('https://picsum.photos/1920/1080?random=10')"}}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-white mb-8">Empowering your business with innovative solutions</p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded">
            Explore Services
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Core Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentServices.map((service, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{service.name}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
                Learn More
              </button>
            </div>
          ))}
        </div>
        <Pagination
          totalPages={Math.ceil(services.length / servicesPerPage)}
          onPageChange={paginate}
        />
      </section>

      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Expertise', 'Innovation', 'Reliability', 'Customer Focus'].map((reason, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">{reason}</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cover bg-center py-16" style={{backgroundImage: "url('https://picsum.photos/1920/1080?random=6')"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded">
            Contact Us
          </button>
        </div>
      </section>
    </div>
    </>
  );
}

export default Services;