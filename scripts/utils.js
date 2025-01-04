const fs = require('fs-extra');
const path = require('path');
const axios = require('axios');

const downloadImage = async (url, filename) => {
  const response = await axios({ url, responseType: 'stream' });
  const imagePath = path.join(__dirname, '../images', filename);
  await new Promise((resolve, reject) => {
    response.data
      .pipe(fs.createWriteStream(imagePath))
      .on('finish', resolve)
      .on('error', reject);
  });
  return imagePath;
};

module.exports = { downloadImage };