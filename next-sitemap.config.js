/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.masyglink.com/', // Replace with your actual domain
    generateRobotsTxt: true, // Generates robots.txt file
    sitemapSize: 5000, // Limits the number of URLs per sitemap file
    changefreq: 'daily', // Frequency of content updates
    priority: 0.7, // Default priority for pages
    exclude: ['/admin', '/dashboard'], // Exclude private pages
  };
  