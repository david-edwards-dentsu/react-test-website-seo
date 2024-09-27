import React from 'react';
import DynamicContent from '../components/DynamicContent';

function Home() {
    
  return (
    <>
        <div className="space-y-16">
        <section className="bg-cover bg-center h-screen flex items-center" style={{backgroundImage: "url('https://picsum.photos/1920/1080?random=1')"}}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-white mb-4">Take control of your business</h1>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded">
                Get Started
            </button>
            </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">We're here to help you thrive</h2>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="mt-4 bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
                Learn More
                </button>
            </div>
            <div className="md:w-1/2">
                <img src="https://picsum.photos/800/600?random=2" alt="Team" className="rounded-lg" />
            </div>
            </div>
        </section>

        <section className="bg-cover bg-center py-16" style={{backgroundImage: "url('https://picsum.photos/1920/1080?random=3')"}}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">Overcome your obstacles</h2>
            <p className="text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className="bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 rounded">
                Learn More
            </button>
            </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Choose your path to grow</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Service {item}</h3>
                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
                    Learn More
                </button>
                </div>
            ))}
            </div>
        </section>

        <section className="bg-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">What our clients are saying</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white shadow-md rounded-lg p-6">
                    <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="flex items-center">
                    <img src={`https://picsum.photos/100/100?random=${item}`} alt={`Client ${item}`} className="w-12 h-12 rounded-full mr-4" />
                    <div>
                        <h4 className="font-semibold">Client Name</h4>
                        <p className="text-gray-500">Company</p>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>

        <section className="bg-cover bg-center py-16" style={{backgroundImage: "url('https://picsum.photos/1920/1080?random=4')"}}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Let's kickstart your business</h2>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded">
                Get Started
            </button>
            </div>
        </section>

        {/* New section for dynamic content */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Dynamic Content Example</h2>
            <DynamicContent initialData={[]} />
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;