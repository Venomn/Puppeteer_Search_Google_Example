const puppeteer = require('puppeteer');
 
let i = 0;
while (i < 10) {
	(async () => {
		const browser = await puppeteer.launch({headless: false});
		const page = await browser.newPage();
		await page.goto('https://www.google.com', { waitUntil: 'networkidle0' });
		await page.type('input[name=q]', 'hello', { delay: 100 })
		await page.click('input[type="submit"]')
		
	 
		setTimeout(async () => await browser.close(), 10000);
	})();

	i++;
}
