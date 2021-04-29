module.exports = function(eleventyConfig) {
    // Copy css and js to the `_site` folder
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/js");

    // Find and copy any image files, maintaining directory structure.
    eleventyConfig.addPassthroughCopy("**/*.jpg");
    eleventyConfig.addPassthroughCopy("**/*.png");
    eleventyConfig.addPassthroughCopy("**/*.ico");
    eleventyConfig.addPassthroughCopy("**/*.svg");
    eleventyConfig.addPassthroughCopy("./src/site.webmanifest");
    eleventyConfig.addPassthroughCopy("./src/sw.js");
    eleventyConfig.addPassthroughCopy("./src/browserconfig.xml");

    return {
        dir: {
            input: 'src',
            output: '_site'
        }
    };
}