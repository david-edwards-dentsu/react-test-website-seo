import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';

function About() {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const iframeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIframeLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => {
      if (iframeRef.current) {
        observer.unobserve(iframeRef.current);
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>About Us | Your Business Name</title>
        <meta name="description" content="Learn about our company's history, mission, and the dedicated team behind our success." />
        <link rel="canonical" href="https://www.yourdomain.com/about" />
      </Helmet>
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
          {/* 
            SEO Comment: Iframe optimization techniques
            1. Lazy loading: We use Intersection Observer to load the iframe only when it's about to enter the viewport.
               This improves page load speed, which is a ranking factor for search engines.
            2. Placeholder: We show a placeholder while the iframe is loading, improving perceived performance.
            3. Aspect ratio: We maintain a consistent aspect ratio to prevent layout shifts, 
               which contributes to a better Core Web Vitals score and potentially better search rankings.
          */}
          <div ref={iframeRef} className="aspect-w-16 aspect-h-9">
            {iframeLoaded ? (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.74844197932819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629794729944!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Our Location"
              ></iframe>
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Loading map...</p>
              </div>
            )}
          </div>
          {/* 
            SEO Comment: Additional iframe optimizations
            4. Loading attribute: The 'loading="lazy"' attribute tells browsers to defer loading off-screen iframes,
               further improving page load performance.
            5. Title attribute: Providing a descriptive title improves accessibility, which can indirectly benefit SEO.
          */}
        </section>
      </div>
    </>
  );
}

export default About;