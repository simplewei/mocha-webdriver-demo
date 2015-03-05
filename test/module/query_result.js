/*
 * 航班查询页用例
 */
'use strict';
module.exports = function(driver) {

	describe('航班查询页', function() {

		var $ = require('../widget/core')(driver),
			webdriver = require('selenium-webdriver');
		var assert = require("assert");

		this.timeout(15000);


		it('等待航班加载完毕 ', function(done) {

			// 等待航班加载完毕
			// 1. 等待有a-tr节点出现，说明有航班数据被加载出来了
			// 2. 等待loading节点关闭，说明加载完毕
			// 单但是第二条不好实现，直接等3秒吧
			// driver.wait(webdriver.until.elementLocated(
			// 	webdriver.By.css('.a-tr')), 10000);

			driver.sleep(3000).then(function(){
				$('.a-tr').isDisplayed().then(function(b){
					assert.equal(true, b);
					done();
				});
			});

			
		});

		it('选择第一个航班,点开 ', function(done) {

			$('#a-table-tr').findElement(webdriver.By.xpath('.//div[@class="a-tr"][1]/div[@class="action"][2]')).click();

			driver.findElement(webdriver.By.xpath('//div[@class="cabin-container"][1]/div[1]/div[@class="a-sub-table-l5"]/input')).click();

			done();
		});
	});
};