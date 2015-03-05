/*
 * Selenium WebDriver JavaScript test with Mocha and NodeJS
 *
 * Start with: SELENIUM=PATH_TO_SELENIUM_JAR/selenium-server-standalone-2.31.0.jar mocha -t 10000 -R list google-sample.js
 *
 * Download selenium-server-standalone-2.31.0.jar from https://selenium.googlecode.com/files/selenium-server-standalone-2.31.0.jar
 * 'sudo su' and 'npm install -g colors mocha selenium-webdriver'
 *
 * http://visionmedia.github.io/mocha/
 * https://code.google.com/p/selenium/wiki/WebDriverJs
 * https://github.com/marak/colors.js/
 *
 * @author István Pató
 */
var assert = require('assert'),
	fs = require('fs'),
	By = require('selenium-webdriver').By,
	chrome = require('selenium-webdriver/chrome');

var driver;

// run it once before tests
before(function(done) {

	this.timeout(15000);

	driver = new chrome.Driver();

	// error handling - if you want do st
	process.on('uncaughtException', function(err) {
		console.log("My error handler... " + err);

		if (driver) {
			//recording screenshot
			driver.takeScreenshot().then(function(img) {
				fs.writeFileSync("/tmp/test.png", new Buffer(img, 'base64'));
			});
		}
	});

	// open start page
	driver.get('http://google.com').then(function() {
		console.log("open google.com...");
		done();
	});

});

// run it once after tests
after(function(done) {
	// works with promise
	driver.quit().then(done);
});

// tests
describe('Google Search', function() {
	it('should work', function(done) {

		var searchBox = driver.findElement(By.name('q'));
		searchBox.sendKeys('webdriver\n').then(function() {
			return searchBox.getAttribute('value');
		}).then(function(value) {
			assert.equal(value, 'webdriver');
			done();
		});
	});

	it('should work 2', function(done) {

		var searchBox = driver.findElement(By.name('q'));
		searchBox.then(function() {
			return searchBox.getAttribute('value');
		}).then(function(value) {
			assert.equal(value, 'webdriver');
			done();
		});
	});

	it('should work 3', function(done) {

		var searchBox = driver.findElement(By.name('q'));
		searchBox.then(function() {
			return searchBox.getAttribute('value');
		}).then(function(value) {
			assert.equal(value, 'webdriver');
			done();
		});
	});

	it('should work 4', function(done) {

		var searchBox = driver.findElement(By.name('q'));
		searchBox.then(function() {
			return searchBox.getAttribute('value');
		}).then(function(value) {
			assert.equal(value, 'webdriver');
			done();
		});
	});


});