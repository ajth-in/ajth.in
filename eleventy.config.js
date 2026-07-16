const MarkdownIt = require("markdown-it");

const markdownLib = new MarkdownIt({ html: true });
markdownLib.disable("code"); // match Eleventy's default (disable indented code blocks)

const remoteContentCache = new Map();

function toRawUrl(url) {
  // Convert a GitHub "blob" URL into its raw counterpart so we fetch the
  // file contents rather than the HTML page GitHub renders for blobs.
  return url.replace(
    /^https:\/\/github\.com\/(.+?)\/blob\//,
    "https://raw.githubusercontent.com/$1/"
  );
}

async function fetchRemoteMarkdown(url) {
  if (remoteContentCache.has(url)) {
    return remoteContentCache.get(url);
  }

  const res = await fetch(toRawUrl(url));
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} ${res.statusText}`);
  }

  const text = await res.text();
  // Strip any frontmatter the remote file may contain.
  const withoutFrontmatter = text.replace(/^---[\s\S]*?---\s*/, "");
  const html = markdownLib.render(withoutFrontmatter);

  remoteContentCache.set(url, html);
  return html;
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addAsyncFilter("remoteMarkdown", async function (url, fallback) {
    if (!url) {
      return fallback || "";
    }

    try {
      return await fetchRemoteMarkdown(url);
    } catch (err) {
      console.warn(
        `[skullmaster] Could not fetch "${url}" (${err.message}); using local content as fallback.`
      );
      return fallback || "";
    }
  });

  // Rewrites a link target inside already-rendered HTML. Pass the source
  // path (e.g. "/docs/react.md") and the destination (e.g. "/skullmaster/react/").
  eleventyConfig.addFilter("replaceLink", function (content, src, destination) {
    if (typeof content !== "string" || !src) {
      return content;
    }
    return content.split(src).join(destination);
  });

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
