"use strict";
const request = require("request");
const generateUrl = require("./lib/generateUrl");
const print = require("./lib/print");
const isChinese = require("is-chinese");

module.exports = function(content) {
	let fromTo = isChinese(content);
	let url = generateUrl(content, fromTo);
	request.get(url, function(error, response, body) {
		if (!error && response.statusCode === 200) {
			print(JSON.parse(body).trans_result[0].dst);
		} else print(error);
	});
};
