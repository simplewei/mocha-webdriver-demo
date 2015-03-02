/*
 * trip.qq.com首页测试用例
 *
 */

var should = require('chai').should(),
	fs = require('fs'),
	webdriver = require('selenium-webdriver'),
	chrome = require('selenium-webdriver/chrome'),
	driver, $;


driver = new chrome.Driver();

// run it once before tests
before(function(done) {


	// open start page
	driver.get('http://trip.qq.com').then(function() {
		console.log("open trip.qq.com...");
		// done();
	});

	$ = require('./widget/core')(driver);

	

	// error handling - if you want do st
	process.on('uncaughtException', function(err) {
		console.log("My error handler... " + err);

		if (driver) {
			//截图
			driver.takeScreenshot().then(function(img) {
				fs.writeFileSync("/tmp/test.png", new Buffer(img, 'base64'));
			});
		}
	});
	done();



});

// run it once after tests
after(function(done) {
	// works with promise
	driver.quit().then(done);
});


require('./module/login')(driver);

describe('首页', function() {

	this.timeout(15000);

	// 登陆
	
	it('点开日历', function(done) {

		// driver.manage().timeouts().pageLoadTimeout(10 * 1000);

		// driver.wait(webdriver.until.elementLocated(
		//	webdriver.By.id('fc')),10000)

		driver.findElement(webdriver.By.id('cft_login_status')).
		findElement(webdriver.By.xpath('//li[contains(@id,"popup_cszm_SHA_2")]')).click()
		// done()
		// $('#fc').click().then(function() {
		// 	return $('#_city_popup').isDisplayed();
		// }).then(function(bool) {
		// 	// driver.findElement(By.xpath('//li[contains(@class,"popup_cszm_SHA_2")]')).click();
		// 	// $('#popup_cszm_SHA_2').click();
		// 	// driver.findElement(By.id('popup_cszm_SHA_2')).click();
		// 	$('#fc').click()
		// 	bool.should.to.equal(true);
		// 	// done();
		// });
	});

})