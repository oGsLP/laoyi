"use strict";
const axois = require("axios");
const generateUrl = require("./lib/generateUrl");
const parse = require("./lib/parse");
const testChinese = require("test-chinese");

module.exports = function(content) {
	let fromTo = testChinese(content, false);
	let url = generateUrl(content, fromTo);
	return axois
		.get(url)
		.then(res => parse(res.data))
		.catch();
};
