import React from 'react';

function Contact() {
  return (
    <>
    <div className="space-y-16">
      <section className="bg-cover bg-center h-screen flex items-center" style={{backgroundImage: "url('https://picsum.photos/1920/1080?random=11')"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-white mb-8">Get in touch with our team</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Send us a message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"></textarea>
              </div>
              <button type="submit" className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
                Send Message
              </button>
            </form>
          </div>
          <div className="md:w-1/2 bg-gray-100 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-4">
              <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <span itemProp="streetAddress">123 Main Street</span><br />
                <span itemProp="addressLocality">City</span>, <span itemProp="addressRegion">State</span> <span itemProp="postalCode">12345</span><br />
              </span>
              Phone: <span itemProp="telephone">(123) 456-7890</span><br />
              Email: <span itemProp="email">info@example.com</span>
            </p>
            <h3 className="text-xl font-semibold mb-2">Office Hours</h3>
            <p className="text-gray-600">
              <span itemProp="openingHours" content="Mo-Fr 09:00-17:00">
                Monday - Friday: 9am - 5pm<br />
                Saturday - Sunday: Closed
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Follow Us</h2>
          <div className="flex justify-center space-x-4">
            {[
              { name: 'Facebook', url: 'https://facebook.com/yourpage' },
              { name: 'Twitter', url: 'https://twitter.com/yourhandle' },
              { name: 'Instagram', url: 'https://instagram.com/yourprofile' },
              { name: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile' }
            ].map((social, index) => (
              <button
                key={index}
                onClick={() => window.open(social.url, '_blank')}
                className="text-gray-600 hover:text-black"
              >
                {social.name}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

export default Contact;