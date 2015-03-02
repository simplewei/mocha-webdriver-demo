


var By = require('selenium-webdriver').By;


module.exports = function(driver){

	return function(selector){
		
		return driver.findElement(By.css(selector));
	};
	
};
