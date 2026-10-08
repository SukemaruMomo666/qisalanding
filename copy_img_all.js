const fs = require('fs');

const files = [
  {
    src: 'C:\\Users\\BAKA\\.gemini\\antigravity-ide\\brain\\bf050b91-829a-48f1-b001-bb3cae106f5b\\uiux_bg_1791442209406.jpg',
    dest: 'public\\images\\services\\uiux-bg.jpg'
  },
  {
    src: 'C:\\Users\\BAKA\\.gemini\\antigravity-ide\\brain\\bf050b91-829a-48f1-b001-bb3cae106f5b\\fullstack_bg_1791442252161.jpg',
    dest: 'public\\images\\services\\fullstack-bg.jpg'
  },
  {
    src: 'C:\\Users\\BAKA\\.gemini\\antigravity-ide\\brain\\bf050b91-829a-48f1-b001-bb3cae106f5b\\mobile_bg_1791442303662.jpg',
    dest: 'public\\images\\services\\mobile-bg.jpg'
  },
  {
    src: 'C:\\Users\\BAKA\\.gemini\\antigravity-ide\\brain\\bf050b91-829a-48f1-b001-bb3cae106f5b\\brand_bg_1791442329233.jpg',
    dest: 'public\\images\\services\\brand-bg.jpg'
  }
];

files.forEach(f => {
  if (fs.existsSync(f.src)) {
    fs.copyFileSync(f.src, f.dest);
    console.log(`Copied to ${f.dest}`);
  } else {
    console.error(`Source file not found: ${f.src}`);
  }
});
