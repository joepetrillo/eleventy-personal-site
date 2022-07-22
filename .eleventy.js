const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/public");

  eleventyConfig.addNunjucksFilter("date", (date) => {
    return DateTime.fromISO(date).toLocaleString(DateTime.DATE_FULL);
  });

  return {
    dir: {
      markdownTemplateEngine: "njk",
      dataTemplateEngine: "njk",
      htmlTemplateEngine: "njk",
      input: "src",
    },
  };
};
