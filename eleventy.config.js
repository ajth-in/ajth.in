module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/terminal.css": "/terminal.css" });
  eleventyConfig.addPassthroughCopy("src/images");

  eleventyConfig.addFilter("shuffle", (arr, limit) => {
    const copy = [...arr].sort(() => Math.random() - 0.5);
    return copy.slice(0, limit);
  });

  eleventyConfig.addFilter("truncate", (str, len) => {
    if (!str) return "";
    return str.length > len ? str.slice(0, len) + "..." : str;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
