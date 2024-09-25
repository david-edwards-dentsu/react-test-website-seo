const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');
const fs = require('fs');
const path = require('path');

// Define your website's URL
const hostname = 'https://www.yourwebsite.com';

// Define your routes
const routes = [
  '/',
  '/about',
  '/services',
  '/contact',
];

async function generateSitemap() {
  // Create a stream to write to
  const stream = new SitemapStream({ hostname });

  // Add the routes to the sitemap
  const routesStream = Readable.from(routes.map(route => ({ url: route, changefreq: 'daily', priority: 0.7 })));

  // Pipe the routes into the sitemap stream
  routesStream.pipe(stream);

  // Generate the XML
  const data = await streamToPromise(stream);

  // Write the XML to a file
  fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), data.toString());

  console.log('Sitemap generated successfully!');
}

generateSitemap().catch(console.error);