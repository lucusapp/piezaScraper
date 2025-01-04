# ebay-to-wallapop

Automatización para scrapeo de productos de eBay y subida a Wallapop.

## Instalación
1. Instala las dependencias:
   ```bash
   npm install
   ```

2. Configura las credenciales en `config/credentials.js`.

## Uso
- **Ejecutar flujo completo**:
  ```bash
  npm start
  ```
- **Solo scrapeo**:
  ```bash
  npm run scrape
  ```
- **Solo subida**:
  ```bash
  npm run upload
  ```