const scrapeEbay = require('./scripts/scrapeEbay');
const uploadToWallapop = require('./scripts/uploadWallapop');

const main = async () => {
  console.log("Iniciando scraping de eBay...");
  await scrapeEbay();
  
  console.log("Subiendo productos a Wallapop...");
  await uploadToWallapop();
};

main().catch(console.error);