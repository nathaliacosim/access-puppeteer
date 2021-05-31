const puppeteer = require('puppeteer');

(async() => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.goto('www.google.com', { waitUntil: 'networkidle2' })
  await browser.close()
})()