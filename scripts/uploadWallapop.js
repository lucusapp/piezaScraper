const puppeteer = require('puppeteer');
const fs = require('fs-extra');
const path = require('path');
const credentials = require('../config/credentials');

const uploadToWallapop = async (product) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  
  await page.goto('https://es.wallapop.com/login');
  
  // Realiza login
  await page.type('#email', credentials.wallapop.email);
  await page.type('#password', credentials.wallapop.password);
  await page.click('button[type="submit"]');
  await page.waitForNavigation();
  
  // Navega al formulario de subir producto
  await page.goto('https://es.wallapop.com/new-item');
  await page.type('#title', product.title);
  await page.type('#description', `Precio: ${product.price}`);
  // Aquí deberías descargar la imagen y subirla
  await page.click('button[type="submit"]');
  
  console.log(`Producto ${product.title} subido con éxito`);
  await browser.close();
};

const runUpload = async () => {
  const filePath = path.join(__dirname, '../data/products.json');
  const products = await fs.readJson(filePath);

  for (const product of products) {
    await uploadToWallapop(product);
  }
};

runUpload().catch(console.error);