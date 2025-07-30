import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Routes to generate static HTML files for
const routes = [
  '/',
  '/projects/unify',
  '/projects/rentalmaster',
  '/projects/micasadao',
  '/projects/thirdstrand',
  '/projects/kitsumon',
  '/projects/jovi',
  '/projects/ecomstore',
  '/projects/foodstore'
];

// Read the built index.html
const indexPath = path.join(__dirname, '../dist/index.html');
const indexHtml = fs.readFileSync(indexPath, 'utf8');

// Create directories and copy index.html for each route
routes.forEach(route => {
  const routePath = route === '/' ? 'index.html' : `${route.slice(1)}/index.html`;
  const fullPath = path.join(__dirname, '../dist', routePath);
  
  // Ensure directory exists
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Copy the index.html file
  fs.writeFileSync(fullPath, indexHtml);
  console.log(`Generated: ${routePath}`);
});

// Copy 404.html for GitHub Pages compatibility
const source404Path = path.join(__dirname, '../public/404.html');
const dest404Path = path.join(__dirname, '../dist/404.html');
if (fs.existsSync(source404Path)) {
  fs.copyFileSync(source404Path, dest404Path);
  console.log('Copied: 404.html');
}

console.log('Static site generation complete!'); 