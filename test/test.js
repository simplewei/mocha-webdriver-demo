/*
 * trip.qq.com首页测试用例
 *
 */ 

var assert = require("assert");

var chrome = require('selenium-webdriver/chrome'), driver, $;

// run it once before tests
before(function(done) {

	this.timeout(15000);

	driver = new chrome.Driver();

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

	// open start page
	driver.get('http://trip.qq.com').then(function() {
		console.log("open trip.qq.com...");
		done();
	});

	$ = require('./widget/core')(driver);

});

// run it once after tests
after(function(done) {
	// works with promise
	// driver.quit().then(done);
});


describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      

      $('#fc').click().then(function(){
      	
      });
    })
  })
})