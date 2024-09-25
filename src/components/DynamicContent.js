import React, { useState, useEffect } from 'react';

function DynamicContent({ initialData }) {
  const [data, setData] = useState(initialData);
  const [isClient, setIsClient] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsClient(true);
    // Fetch data from JSONPlaceholder API
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        console.log('Fetched data:', posts); // Log the fetched data
        if (Array.isArray(posts) && posts.length > 0) {
          setData(posts);
        } else {
          setError('No posts found or data is not an array');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data');
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log('Current data state:', data); // Log the data state after each update
  }, [data]);

  if (!isClient) {
    // Server-side or initial render
    return (
      <>
        {/* SEO Comment: Initial server-rendered content */}
        <div>{JSON.stringify(initialData)}</div>
      </>
    );
  }

  // Client-side render
  return (
    <>
      {/* SEO Comment: Hydrated, client-side rendered content */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">Dynamically Rendered Content:</h3>
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : Array.isArray(data) ? (
          <ul className="space-y-6">
            {data.slice(0, 5).map(post => (
              <li key={post.id} className="border-b pb-4">
                <h4 className="text-xl font-semibold mb-2">{post.title}</h4>
                <p className="text-gray-700">{post.body}</p>
                <p className="text-sm text-gray-500 mt-2">User ID: {post.userId}, Post ID: {post.id}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Data is not in the expected format. Current data: {JSON.stringify(data)}</p>
        )}
        <button
          onClick={() => setData([{ id: 'custom', userId: 'client', title: 'Updated client-side!', body: 'This content was updated on the client.' }])}
          className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Update Content
        </button>
      </div>
    </>
  );
}

export default DynamicContent;