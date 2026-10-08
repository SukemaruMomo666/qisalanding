const fs = require('fs');

const src = 'C:\\Users\\BAKA\\.gemini\\antigravity-ide\\brain\\bf050b91-829a-48f1-b001-bb3cae106f5b\\brand_bg_notext_1791442542478.jpg';
const dest = 'public\\images\\services\\brand-bg.jpg';

if (fs.existsSync(src)) {
  fs.copyFileSync(src, dest);
  console.log(`Successfully replaced ${dest} with the new abstract brand image!`);
} else {
  console.error(`Source file not found: ${src}`);
}
