import React, { useState } from 'react';

function DynamicContent() {
  const [showMore, setShowMore] = useState(false);

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Our Business Strategy</h2>
      <p className="mb-4">
        At our company, we believe in innovative solutions that drive growth and efficiency.
        Our approach combines cutting-edge technology with proven methodologies to deliver
        exceptional results for our clients.
      </p>
      {showMore && (
        <div className="mt-4">
          <p className="mb-4">
            We focus on three key areas: digital transformation, sustainable practices, and
            customer-centric innovation. By leveraging these pillars, we help businesses
            navigate the complexities of the modern market and achieve long-term success.
          </p>
          <p className="mb-4">
            Our team of experts brings diverse experience from various industries, ensuring
            that we can tackle challenges across different sectors. We pride ourselves on
            our ability to adapt and evolve, staying ahead of market trends and technological
            advancements.
          </p>
          <p>
            Partner with us to unlock your business's full potential and embark on a journey
            of continuous growth and improvement.
          </p>
        </div>
      )}
      <button
        onClick={toggleReadMore}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {showMore ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
}

export default DynamicContent;