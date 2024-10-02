import React from 'react';

function About() {
  return (
    <>
      <div className="space-y-16">
        <section className="bg-cover bg-center h-screen flex items-center" style={{backgroundImage: "url('https://picsum.photos/1920/1080?random=7')"}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-white mb-4">About Us</h1>
            <p className="text-xl text-white mb-8">Discover our story and mission</p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
                Learn More
              </button>
            </div>
            <div className="md:w-1/2">
              <img src="https://picsum.photos/800/600?random=8" alt="Our Story" className="rounded-lg" />
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['Integrity', 'Innovation', 'Collaboration'].map((value, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">{value}</h3>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((member) => (
              <div key={member} className="text-center">
                <img src={`https://picsum.photos/200/200?random=${member}`} alt={`Team Member ${member}`} className="w-32 h-32 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700">Team Member {member}</h3>
                <p className="text-gray-600">Position</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.74844197932819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629794729944!5m2!1sen!2sus"
            width="1200"
            height="600"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            title="Google Maps"
          ></iframe>
        </section>
      </div>
    </>
  );
}

export default About;