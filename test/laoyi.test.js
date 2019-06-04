const assert = require("assert");
const laoyi = require("../laoyi.js");
const generateUrl = require("./../lib/generateUrl");
const print = require("./../lib/print");
const parse = require("./../lib/parse");

describe("#test", () => {
	describe("#generateUrl", () => {
		it("zh -> en", () => {
			assert.strictEqual(
				generateUrl("捞的一", true).split("salt")[0],
				"http://api.fanyi.baidu.com/api/trans/vip/translate?q=%E6%8D%9E%E7%9A%84%E4%B8%80&from=zh&to=en&appid=20190423000290902&"
			);
		});
		it("en -> zh", () => {
			assert.strictEqual(
				generateUrl("lack", false).split("salt")[0],
				"http://api.fanyi.baidu.com/api/trans/vip/translate?q=lack&from=en&to=zh&appid=20190423000290902&"
			);
		});
	});
	describe("#print", () => {
		it("should be OK", () => {
			print("OK");
			assert(print);
		});
	});
	describe("#parse", () => {
		it("should be OK", () => {
			assert(
				parse({
					from: "en",
					to: "zh",
					trans_result: [{ src: "", dst: "test" }]
				}),
				"test"
			);
		});
	});
	describe("#laoyi", () => {
		it("should be 'Get one'", () => {
			laoyi("捞得一").then(data => {
				assert.strictEqual(data, "Get one");
			});
		});
		it("should be '老'", () => {
			laoyi("lao").then(data => {
				assert.strictEqual(data, "老");
			});
		});
	});
});
