# Jasmine Dirigible v3 Module

[![Eclipse License](http://img.shields.io/badge/license-Eclipse-brightgreen.svg)](LICENSE)
[![GitHub contributors](https://img.shields.io/github/contributors/dirigiblelabs/ext-v3-jasmine.svg)](https://github.com/dirigiblelabs/ext-v3-jasmine/graphs/contributors)

## Use
### Example
<pre>
var j = require("jasmine/jasmine");
var jasmine = j.core(j);
var env = jasmine.getEnv();

var $$j = j.interface(jasmine, env);

$$j.describe("A suite is just a function", function() {
   
    $$j.it("and has a positive case", function() {

		$$j.expect(false).toBe(true);
	});
	
	$$j.it("and can have a negative case", function() {
		$$j.expect(false).not.toBe(true);
	});	  

});

require("jasmine/test-runner").run(env);
</pre>
The next section will use this example to explore the main steps in using Jasmine for testing server-side scripts.

### Load Jasmine and create context environment
To get a reference to the latest Jasmine in this module, use the alias `jasmine/jasmine` path and `require` it:  
`var j = require("jasmine/jasmine");`  
Or to get reference to a specific version:  
`var j = require("jasmine/jasmine-2.5.1");`  
In this example the reference is to Jasmine 2.5.1. Change as appropriate.

Further, setup test environment as you normally would with Jasmine:  
<pre>
var jasmine = j.core(j);
var env = jasmine.getEnv();

var $$j = j.interface(jasmine, env);
</pre>

### Develop tests
Develop Jasmine tests as usual. Just bear in mind that this is server-side environment and don't count on browser JS environment and objects like window or document.  
  
<pre>
$$j.describe("A suite is just a function", function() {
   
    $$j.it("and has a positive case", function() {

		$$j.expect(false).toBe(true);
	});
	
	$$j.it("and can have a negative case", function() {
		$$j.expect(false).not.toBe(true);
	});	  

});
</pre>

### Run tests
To run the tests and dispatch results, with Dirigible Test Runner use:  
`require("jasmine/test-runner").run(env);`  

### Test results
Test results are available on the Dirigible server console and via the Test Runner Service by default. You can opt out of either of these or both. The `run` method has an optional second argument, which is a configuration object that can be used to disable the default reporters in use:  
<pre>
require("jasmine/test-runner").run(env, {
    "disable-console-reporter":true,
    "disable-service-reporter": true
  });
</pre>

You can also control the output of the console reporter with the `prettyPrint` configuration property. A value of boolean true will indent and insert new line characters to layout more human readable JSON output. This is the default. A value of boolean false will write the output in more compact form.

## License

This project is copyrighted by [SAP SE](http://www.sap.com/) and is available under the [Eclipse Public License v 1.0](https://www.eclipse.org/legal/epl-v10.html). See [LICENSE](LICENSE) and [NOTICE.txt](NOTICE.txt) for further details.
