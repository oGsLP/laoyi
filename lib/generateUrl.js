const conf = require("./lib");
const MD5 = require("md5.js");

module.exports = function(content, fromTo) {
	let salt = new Date().getTime();
	let sign = new MD5()
		.update(conf.appid + content + salt + conf.cdkey)
		.digest("hex");
	return fromTo
		? `${conf.site}?q=${encodeURI(content)}&from=zh&to=en&appid=${
				conf.appid
		  }&salt=${salt}&sign=${sign}`
		: `${conf.site}?q=${encodeURI(content)}&from=en&to=zh&appid=${
				conf.appid
		  }&salt=${salt}&sign=${sign}`;
};
