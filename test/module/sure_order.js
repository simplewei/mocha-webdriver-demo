/*
 * 订单填写用例
 */
'use strict';
module.exports = function(driver) {

	describe('订单确认页', function() {

		var $ = require('../widget/core')(driver),
			webdriver = require('selenium-webdriver');
		var assert = require("assert");

		this.timeout(15000);


		it('确认订单', function(done) {

			// 等待航班信息、乘机人信息、联系人信息 加载完毕
			driver.wait(webdriver.until.elementLocated(webdriver.By.css('.trip-info')), 10000);
			driver.wait(webdriver.until.elementLocated(webdriver.By.css('.passenger-list-line')), 10000);
			driver.wait(webdriver.until.elementLocated(webdriver.By.css('.passenger-list-line')), 10000);

			$('.btn_common').click().then(function(){
				done();
			});			
			
		});

		it('确认是否最终进入支付页', function(done) {

			driver.getAllWindowHandles().then(function(tabs) {
				driver.switchTo().window(tabs[1]);
				driver.wait(function() {
					return driver.getTitle().then(function(title) {
						return title === '财付通 会支付 会生活 - 支付中心';
					});
				}, 10000);
				done();
			});
		});

	});
};