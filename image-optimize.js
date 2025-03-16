import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

// Define the directory for images
const imagesDir = path.resolve('./public/images');
// Allowed image extensions
const allowedExtensions = ['.jpg', '.jpeg', '.png'];

async function optimizeImage(file) {
  try {
    const ext = path.extname(file).toLowerCase();
    if (!allowedExtensions.includes(ext)) return;

    const filePath = path.join(imagesDir, file);
    const baseName = path.basename(file, ext);
    const optimizedFilePath = path.join(imagesDir, `${baseName}-o${ext}`);
    const webpFilePath = path.join(imagesDir, `${baseName}.webp`);

    // Create a sharp instance and get metadata
    const image = sharp(filePath);
    const metadata = await image.metadata();

    // Start the pipeline: conditionally resize if image width exceeds 1024 pixels.
    let pipeline = image;
    if (metadata.width && metadata.width > 1024) {
      pipeline = pipeline.resize({ width: 1024 });
    }

    // Adjust compression based on file extension
    if (ext === '.png') {
      pipeline = pipeline.png({ quality: 80 });
    } else {
      pipeline = pipeline.jpeg({ quality: 80 });
    }

    // Process the image and obtain an optimized buffer
    const optimizedBuffer = await pipeline.toBuffer();

    // Save the optimized image
    await fs.writeFile(optimizedFilePath, optimizedBuffer);
    console.log(`Optimized image saved: ${optimizedFilePath}`);

    // Create and save the WebP version from the optimized buffer
    await sharp(optimizedBuffer)
      .webp({ quality: 80 })
      .toFile(webpFilePath);
    console.log(`WebP image saved: ${webpFilePath}`);
  } catch (err) {
    console.error(`Error processing ${file}:`, err);
  }
}

async function processImages() {
  try {
    const files = await fs.readdir(imagesDir);
    // Process images concurrently
    await Promise.all(files.map(optimizeImage));
  } catch (err) {
    console.error('Error reading images directory:', err);
  }
}

processImages();