const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const logoPath = path.join(__dirname, 'public/assets/logos/Legends Logo.png');
const publicPath = path.join(__dirname, 'public');

const sizes = [
  { name: 'favicon-192.png', size: 192 },
  { name: 'favicon-180.png', size: 180 }, // Apple touch icon
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'favicon-64.png', size: 64 },
  { name: 'favicon-32.png', size: 32 },
  { name: 'favicon-16.png', size: 16 },
];

async function generateFavicons() {
  try {
    for (const { name, size } of sizes) {
      const outputPath = path.join(publicPath, name);

      await sharp(logoPath)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .png()
        .toFile(outputPath);

      const stats = fs.statSync(outputPath);
      console.log(`✓ Generated ${name} (${stats.size} bytes)`);
    }

    console.log('\n✓ All favicons generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons();
