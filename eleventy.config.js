module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "node_modules/terminal.css/dist/terminal.css": "/terminal.css" });
  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
