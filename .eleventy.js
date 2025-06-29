require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';

module.exports = function(eleventyConfig) {
  // Passthrough copy for the css directory
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/.nojekyll");

  // Shortcode for current year
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

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
