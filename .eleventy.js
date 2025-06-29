require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';

// Format date for W3C datetime
function w3DateFilter(value) {
  const date = value ? new Date(value) : new Date();
  return date.toISOString();
}

module.exports = function(eleventyConfig) {
  // Add w3DateFilter
  eleventyConfig.addFilter('w3DateFilter', w3DateFilter);
  // Passthrough copy for the css directory
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/.nojekyll");

  // Shortcode for current year
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  
  // Add a filter to format dates for sitemap
  eleventyConfig.addFilter('sitemapDate', (date) => {
    const d = date ? new Date(date) : new Date();
    return d.toISOString().split('T')[0];
  });

  // Set custom directories for input, output, includes, and data
  return {
    pathPrefix: "/",
    dir: {
      input: "src",
      includes: "_includes",

      data: "_data",
      output: "_site"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
