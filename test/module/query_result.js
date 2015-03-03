/*
 * 航班查询页用例
 */
'use strict';
module.exports = function(driver) {

	describe('航班查询页', function() {

		var $ = require('../widget/core')(driver),
			webdriver = require('selenium-webdriver');

		this.timeout(15000);


		it('选择第一个航班,点开 ', function(done) {
debugger
			driver.wait(webdriver.until.elementLocated($('.a-tr')), 10000);

			$('#a-table-tr').findElement(webdriver.By.xpath
				('//a-tr[1]/div[@class="action"][2]')).click();
			done();
		});

		it('选择日期，点击查询航班', function(done) {


		});
	});
};