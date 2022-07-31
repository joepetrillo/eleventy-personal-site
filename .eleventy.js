const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const timeToRead = require("eleventy-plugin-time-to-read");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/public");

  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(timeToRead, {
    speed: "180 words per minute",
    language: "en",
    style: "long",
    type: "unit",
    hours: "auto",
    minutes: true,
    seconds: false,
    digits: 1,
    output: function (data) {
      return `${Math.max(1, Math.round(data.totalSeconds / 60))} minute`;
    },
  });

  eleventyConfig.addNunjucksFilter("date", (date) => {
    return DateTime.fromISO(date).toLocaleString(DateTime.DATE_FULL);
  });

  return {
    dir: {
      markdownTemplateEngine: "njk",
      dataTemplateEngine: "njk",
      htmlTemplateEngine: "njk",
      input: "src",
      output: "tmp",
    },
  };
};
