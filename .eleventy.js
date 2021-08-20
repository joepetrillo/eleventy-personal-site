const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/assets");

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).plus({ days: 1 }).toLocaleString(DateTime.DATE_MED);
    });

    return {
        dir: {
            markdownTemplateEngine: 'njk',
            dataTemplateEngine: 'njk',
            htmlTemplateEngine: 'njk',
            input: 'src',
            output: '_site'
        }
    };
};