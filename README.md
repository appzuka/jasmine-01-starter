# karma-01-starter

A demo of the simple use of jasmine. Press 'Run' to
run the tests.

Look at the code in the src folder to see the code behind this.

* Files ending in '.spec.js' are the test specs.
* Other .js files are the JavaScript files being tested.

## 01-simple

This contains 2 trivial tests to demonstrate how to define
test suites, specs and expectations.

## 02-account

This is a more realistic test.  There is a JavaScript file
containing the definition of a Bank Account object that 
stores the balance and provides methods to add, withdraw
and get the current balance.

The first spec (A) tests this functionality and the tests
can be run in any order.  This spec will pass if jasmine
is allowed to randomise the test order.

The second spec (B) provides similar tests but they must
be run in the order listed.
