// inline-assets.js
import fs from 'fs';
import path from 'path';

// Path to your build output directory
const distPath = path.resolve('dist');
const htmlFilePath = path.join(distPath, 'index.html');

console.log('Running post-build script to inline assets...');

// 1. Read the generated HTML file
let htmlContent = fs.readFileSync(htmlFilePath, 'utf8');

// 2. Find and replace the CSS link with an inline <style> tag
const cssLinkRegex = /<link rel="stylesheet"[^>]*?href="([^"]+)">/;
const cssMatch = htmlContent.match(cssLinkRegex);

if (cssMatch && cssMatch[1]) {
  const cssFilePath = path.join(distPath, cssMatch[1]);
  if (fs.existsSync(cssFilePath)) {
    const cssContent = fs.readFileSync(cssFilePath, 'utf8');
    const styleTag = `<style>${cssContent}</style>`;
    htmlContent = htmlContent.replace(cssLinkRegex, styleTag);
    console.log('✅ Inlined CSS.');
    // fs.unlinkSync(cssFilePath);
  }
}



// 4. Write the modified HTML back to the file
fs.writeFileSync(htmlFilePath, htmlContent);

console.log('Post-build script finished successfully!');