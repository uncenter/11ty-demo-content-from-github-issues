require("dotenv").config();

const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
	const authHeaders = {
		Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
	};

	const issues = await EleventyFetch(
		"https://api.github.com/repos/11ty/eleventy/issues",
		{
			duration: "1d",
			type: "json",
			headers: authHeaders,
		}
	);

	return issues;
};
