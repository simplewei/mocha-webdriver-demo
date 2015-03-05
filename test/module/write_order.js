/*
 * 订单填写用例
 */
'use strict';
module.exports = function(driver) {

	describe('订单填写页', function() {

		var $ = require('../widget/core')(driver),
			webdriver = require('selenium-webdriver');
		var assert = require("assert");

		this.timeout(15000);

		it('订单创建成功，数据加载正确', function(done) {

			driver.wait(webdriver.until.elementLocated(webdriver.By.css('.passenger-info-list')), 10000);

			driver.getTitle().then(function(title) {
				assert.equal('订单填写-财付通-机票订购：官方优质票源，安全、稳定、值得信赖', title);
				done();
			});
		});

		it('选择乘机人、联系人, 点击下一步', function(done) {

			$('.passenger-info-list').click();
			$('.contacter-info-list').click();

			$('#listsubmit_buttom').click().then(function() {
				done();
			});
		});

	});
};