// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by lajungla-theme.js.
import { name as packageName } from "meteor/lajungla-theme";

// Write your tests here!
// Here is an example.
Tinytest.add('lajungla-theme - example', function (test) {
  test.equal(packageName, "lajungla-theme");
});
