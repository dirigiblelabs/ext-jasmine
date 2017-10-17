/* globals $ */
/* eslint-env node, dirigible */
exports.jasmine_console_reporter = {
	specStarted: function(result) {
		console.info('[Spec started]: ' + JSON.stringify(result));
	},
	specDone: function(result) {
		console.info('[Spec done]: ' + JSON.stringify(result));
	},
	suiteStarted: function(result) {
    	console.info('[Suite started]: ' + JSON.stringify(result));
	},	
	suiteDone: function(result) {
    	console.info('[Suite done]: ' + JSON.stringify(result));
	},
	jasmineStarted: function(suiteInfo) {
		console.info('[Jasmine started]: ' + JSON.stringify(suiteInfo));
	},
	jasmineDone: function() {
		console.info('[Jasmine done]');
	}
};