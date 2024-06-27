const MarkdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
	const mdLib = new MarkdownIt({
		html: true,
		linkify: true,
	});
	eleventyConfig.addFilter("renderMd", (content) => mdLib.render(content));
	eleventyConfig.addFilter("renderMdInline", (content) =>
		mdLib.renderInline(content)
	);

	eleventyConfig.addPassthroughCopy({ "src/_assets/": "assets/" });

	return {
		dir: {
			input: "src",
			includes: "_includes",
			data: "_data",
			output: "dist",
		},
	};
};
