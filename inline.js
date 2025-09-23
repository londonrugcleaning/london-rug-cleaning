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
    fs.unlinkSync(cssFilePath); // Optional: remove the original CSS file
  }
}

// 3. Find and replace the JS script tag with an inline <script> tag
const jsScriptRegex = /<script type="module"[^>]*?src="([^"]+)">/;
const jsMatch = htmlContent.match(jsScriptRegex);

if (jsMatch && jsMatch[1]) {
  const jsFilePath = path.join(distPath, jsMatch[1]);
  if (fs.existsSync(jsFilePath)) {
    const jsContent = fs.readFileSync(jsFilePath, 'utf8');
    // Remove the closing script tag from the content to avoid issues
    const safeJsContent = jsContent.replace(/<\/script>/g, '<\\/script>');
    const scriptTag = `<script type="module">${safeJsContent}</script>`;
    htmlContent = htmlContent.replace(jsScriptRegex, scriptTag);
    console.log('✅ Inlined JavaScript.');
    fs.unlinkSync(jsFilePath); // Optional: remove the original JS file
  }
}

// 4. Write the modified HTML back to the file
fs.writeFileSync(htmlFilePath, htmlContent);

console.log('Post-build script finished successfully!');