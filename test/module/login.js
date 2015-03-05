/*
 * 登陆测试用例,
 * 用个人中心来登陆
 */
'use strict';
module.exports = function(driver) {

	var $ = require('../widget/core')(driver),
		webdriver = require('selenium-webdriver'),
		user = require('../user.conf');

	describe('登陆', function() {

		this.timeout(15000);
		it('点击页头登陆link', function(done) {
			// 等待发布页加载完毕
			driver.wait(webdriver.until.elementLocated(
				webdriver.By.id('cft_login_status')), 10000);
			$('#cft_login_status a').click().then(function() {
				done();
			});
		});

		it('选中登陆弹出框，输入账号密码并登陆', function(done) {

			driver.switchTo().frame("cft_login_ifr");
			driver.switchTo().frame("quick_login_iframe");
			$('#switcher_plogin').click();

			$('#u').sendKeys(user.user);
			$('#p').sendKeys(user.psw);
			$('#login_button').click().then(function() {
				driver.sleep(1000);
			});
			driver.switchTo().defaultContent().then(function() {
				done();
			});
		});
	});
};