
	
var chrome = require('selenium-webdriver/chrome'),
	driver = new chrome.Driver(),
	By = require('selenium-webdriver').By;


module.exports = {
	driver: driver,
	By: By
}
