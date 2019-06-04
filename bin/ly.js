#!/usr/bin/env node

const program = require("commander");
const laoyi = require("./../index");

program
	.version("laoyi v.0.0.3", "-v, --version")
	.usage("<content to transfer> [options]")
	.parse(process.argv);

function resolve(program) {
	const { copy, hashtag, slash, args } = program;
	if (args.length > 0) {
		laoyi(args.toString());
	} else return false;
}

resolve(program);
