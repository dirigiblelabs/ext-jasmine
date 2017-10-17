/* globals $ */
/* eslint-env node, dirigible */
"use strict";
exports.service = function(env){
	var _env = env || require('core/v3/globals').get('JasmineEnv');
	var svc_reporter = require("jasmine/reporters/svc-reporter");
	svc_reporter.env = _env;
	require("test/runner").service({
		"execute": function(){
			_env.execute();
		},
		"serviceReporter": svc_reporter
	});
};
