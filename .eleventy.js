module.exports = function(eleventyConfig) {
    // Copy css and js to the `_site` folder
    eleventyConfig.addPassthroughCopy({'./src/dist/css': 'assets/css' });
    eleventyConfig.addPassthroughCopy({'./src/dist/js': 'assets/js'});

    // Find and copy any image files, maintaining directory structure.
    eleventyConfig.addPassthroughCopy('./src/**/*.jpg');
    eleventyConfig.addPassthroughCopy('./src/**/*.png');
    eleventyConfig.addPassthroughCopy('./src/**/*.ico');
    eleventyConfig.addPassthroughCopy('./src/**/*.svg');
    eleventyConfig.addPassthroughCopy('./src/site.webmanifest');
    eleventyConfig.addPassthroughCopy('./src/sw.js');
    eleventyConfig.addPassthroughCopy('./src/browserconfig.xml');
    eleventyConfig.addPassthroughCopy('./src/CNAME');

    // Current year for copyright
    eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);
    eleventyConfig.addShortcode('staticFileCache', () => '0.0.10');

    return {
        templateFormats: ['md', 'njk'],
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        dir: {
            input: 'src',
            output: '_site'
        }
    };
}
