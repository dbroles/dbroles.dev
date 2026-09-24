import sharp from 'sharp';
import fs from 'fs';

// Read raw wiki MySQL logo
let wiki = fs.readFileSync('/Users/daniel/dev/dbroles.dev/scratch/mysql_wiki.svg', 'utf8');

// Strip metadata
wiki = wiki.replace(/<metadata>[\s\S]*?<\/metadata>/, '');

// Replace all fills (#00758f and #f29111) with #88AA00
let wikiGreen = wiki
  .replace(/fill:#00758f/g, 'fill:#88AA00')
  .replace(/fill:#f29111/g, 'fill:#88AA00');

// Center in a 76x76 square box
const size = 76;
const minX = 28.43 - size / 2;
const minY = 16.83 - size / 2;

let innerPaths = wikiGreen
  .replace(/<\?xml[^>]*\?>/, '')
  .replace(/<svg[^>]*>/, '')
  .replace(/<\/svg>/, '')
  .replace(/<title>.*?<\/title>/, '');

let mysqlFullSquare = `
<svg width="1248" height="1248" viewBox="${minX} ${minY} ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  ${innerPaths}
</svg>
`;

fs.writeFileSync('/Users/daniel/dev/dbroles.dev/scratch/mysql_full_centered.svg', mysqlFullSquare);

sharp(Buffer.from(mysqlFullSquare))
  .png()
  .toFile('/Users/daniel/dev/dbroles.dev/scratch/mysql_full_centered.png')
  .then(() => console.log('MySQL full logo centered successfully!'));

