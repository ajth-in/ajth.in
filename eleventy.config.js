module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "node_modules/terminal.css/dist/terminal.css": "/terminal.css" });
  eleventyConfig.addPassthroughCopy("src/images");
  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
