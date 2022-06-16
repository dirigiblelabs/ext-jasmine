const j = require("jasmine/jasmine");
const jasmine = j.core(j);
const env = jasmine.getEnv();
const junitReporter = require("/jasmine/reporters/junit_reporter");


const $$j = j.interface(jasmine, env);

$$j.describe("A suite is just a function", function () {
	$$j.it("and has a positive case", function () {

		$$j.expect(false).toBe(true);
	});

	$$j.it("and can have a negative case", function () {
		$$j.expect(false).not.toBe(true);
	});

});

env.addReporter(new junitReporter.JUnitXmlReporter({
	savePath: "/test-results",
	filePrefix: "report",
	consolidateAll: true
}));

env.execute();
