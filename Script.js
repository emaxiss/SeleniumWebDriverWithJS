const webDriver = require("selenium-webdriver");
const driver = new webDriver.Builder().forBrowser('chrome').build();
const By = webDriver.By;

(async function testRun() { //Immediate Invoked Function Expression (НО! можно взывать по обычному)
    await driver.get("https://google.com");
    const searchKey = driver.findElement(By.xpath('//input[@name = \'q\']'));
    await searchKey.sendKeys("ykt");
    await driver.sleep(1000);
    searchKey.sendKeys(webDriver.Key.ENTER);
    await driver.sleep(2000);
    const results = await driver.findElements(By.xpath("//div[@class=\"g\"]"));
    console.log(`Количество результатов - ${results.length}`);

    for (let el of results) {
        let text = await el.getText();
        console.log('_______________________');
        console.log(text);
        console.log('_______________________');
    }
    driver.close();
})();


