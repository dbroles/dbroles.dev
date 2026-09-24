import sharp from 'sharp';
import fs from 'fs';

// 1. SQL Server
// Original has viewBox="0 0 128 128" and fill="#ee352c"
let sqlSvg = fs.readFileSync('/Users/daniel/dev/dbroles.dev/scratch/sqlserver.svg', 'utf8');
// Replace fill
let sqlSvg88aa00 = sqlSvg.replace(/fill="#ee352c"/g, 'fill="#88AA00"');
// Create a 1248x1248 version with padding for app icon
let sqlSvgSquare = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1248 1248" width="1248" height="1248">
  <g transform="translate(124, 124) scale(7.8125)">
    ${sqlSvg88aa00.replace(/<svg[^>]*>/, '').replace(/<\/svg>/, '')}
  </g>
</svg>
`;
fs.writeFileSync('/Users/daniel/dev/dbroles.dev/scratch/test_sqlserver.svg', sqlSvgSquare);

// 2. MySQL
// Original has viewBox="0 0 128 128" and fill="#00618A"
let mysqlSvg = fs.readFileSync('/Users/daniel/dev/dbroles.dev/scratch/mysql.svg', 'utf8');
let mysqlSvg88aa00 = mysqlSvg.replace(/fill="#00618A"/g, 'fill="#88AA00"');
let mysqlSvgSquare = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1248 1248" width="1248" height="1248">
  <g transform="translate(124, 124) scale(7.8125)">
    ${mysqlSvg88aa00.replace(/<svg[^>]*>/, '').replace(/<\/svg>/, '')}
  </g>
</svg>
`;
fs.writeFileSync('/Users/daniel/dev/dbroles.dev/scratch/test_mysql.svg', mysqlSvgSquare);

// 3. Oracle
// Let's create:
// 3a. The iconic Oracle "O" mark (which is 1:1 square, perfect for app icons)
// 3b. The full ORACLE wordmark
let oracleSvg = fs.readFileSync('/Users/daniel/dev/dbroles.dev/scratch/oracle.svg', 'utf8');
let oracleSvg88aa00 = oracleSvg.replace(/fill:#C74634/g, 'fill:#88AA00');

// The Oracle 'O' path from the official SVG:
// M14.88,30H32.15a14.86,14.86,0,0,0,0-29.71H14.88a14.86,14.86,0,1,0,0,29.71m16.88-5.23H15.26a9.62,9.62,0,0,1,0-19.23h16.5a9.62,9.62,0,1,1,0,19.23
// The O is bounded within X:[0, 47], Y:[0, 30]
let oracleOSvgSquare = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1248 1248" width="1248" height="1248">
  <!-- Centered Oracle O icon in #88AA00 -->
  <g transform="translate(624, 624) scale(20) translate(-23.5, -15)">
    <path fill="#88AA00" d="M14.88,30H32.15a14.86,14.86,0,0,0,0-29.71H14.88a14.86,14.86,0,1,0,0,29.71m16.88-5.23H15.26a9.62,9.62,0,0,1,0-19.23h16.5a9.62,9.62,0,1,1,0,19.23" />
  </g>
</svg>
`;
fs.writeFileSync('/Users/daniel/dev/dbroles.dev/scratch/test_oracle_o.svg', oracleOSvgSquare);

// Render PNGs with sharp
Promise.all([
  sharp(Buffer.from(sqlSvgSquare)).png().toFile('/Users/daniel/dev/dbroles.dev/scratch/test_sqlserver.png'),
  sharp(Buffer.from(mysqlSvgSquare)).png().toFile('/Users/daniel/dev/dbroles.dev/scratch/test_mysql.png'),
  sharp(Buffer.from(oracleOSvgSquare)).png().toFile('/Users/daniel/dev/dbroles.dev/scratch/test_oracle_o.png'),
]).then(() => console.log('All test icons rendered successfully!'));
