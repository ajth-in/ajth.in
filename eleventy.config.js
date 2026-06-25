module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/terminal.css": "/terminal.css" });
  eleventyConfig.addPassthroughCopy("src/images");
  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
