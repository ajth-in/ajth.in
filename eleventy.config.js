module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/terminal.css": "/terminal.css" });
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy({
    "node_modules/prismjs/themes/prism-okaidia.css": "/prism.css",
    "node_modules/prismjs/prism.js": "/prism.js",
    "node_modules/prismjs/components/prism-bash.min.js": "/prism-bash.min.js",
    "node_modules/prismjs/components/prism-json.min.js": "/prism-json.min.js",
    "node_modules/prismjs/components/prism-typescript.min.js": "/prism-typescript.min.js",
    "node_modules/prismjs/components/prism-jsx.min.js": "/prism-jsx.min.js",
  });

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
