const puppeteer = require('puppeteer');
const fs = require('fs-extra');
const path = require('path');

const scrapeEbay = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto('https://www.ebay.com/usr/username'); // Cambia 'username' por el usuario deseado
  
  const products = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.item-card')).map(product => ({
      title: product.querySelector('.item-title')?.innerText,
      price: product.querySelector('.item-price')?.innerText,
      image: product.querySelector('img')?.src,
    }));
  });
  
  await browser.close();
  
  // Guarda productos en archivo JSON
  const filePath = path.join(__dirname, '../data/products.json');
  await fs.writeJson(filePath, products, { spaces: 2 });
  console.log(`Scraping completado. Productos guardados en ${filePath}`);
};

scrapeEbay().catch(console.error);