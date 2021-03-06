/*
 * trip.qq.com首页测试用例
 *
 */

var should = require('chai').should(),
	fs = require('fs'),
	webdriver = require('selenium-webdriver'),
	chrome = require('selenium-webdriver/chrome'),
	driver, $;


driver = new chrome.Driver(),
	$ = require('./widget/core')(driver);

// run it once before tests
before(function(done) {


	this.timeout(15000);

	process.on('uncaughtException', function(err) {
		console.log("My error handler... " + err);
		if (driver) {
			//截图
			driver.takeScreenshot().then(function(img) {
				fs.writeFileSync("tmp/error.png", new Buffer(img, 'base64'));
			});
		}
	});


	driver.get('http://trip.qq.com').then(function(){
		done();
	});

});

// run it once after tests
after(function(done) {
	// works with promise
	this.timeout(15000);
	driver.quit().then(done);
});


// 登陆
require('./module/login')(driver);

describe('首页', function() {

	this.timeout(15000);

	it('选择出发、目的城市, ', function(done) {
		// 出发地
		$('#fc').click();
		$('#_div_tmp_div_list').findElement(webdriver.By.xpath('//li[contains(@id, "SHA") and @class="_city_top_list"]')).click();

		// 目的地
		$('#tc').click();
		$('#_div_tmp_div_list').findElement(webdriver.By.xpath('//li[contains(@id, "PEK") and @class="_city_top_list"]')).click().
		then(function(){
			done();
		});
		
	});

	it('选择日期，点击查询航班', function(done) {

		// 选择日期 —— 选择右边日历第二行第一个元素
		$('#date').click();
		$('#two_yui').findElement(webdriver.By.xpath('.//table/tbody/tr/following-sibling::tr[2]/td[1]/a')).click();

		// 执行航班查询
		$('#gl_jipiao_submit').click().then(function(){
			done();
		});
		
	});

});

// 航班查询页
require('./module/query_result')(driver);

// 订单填写页
require('./module/write_order')(driver);

// 订单确认页
require('./module/sure_order')(driver);