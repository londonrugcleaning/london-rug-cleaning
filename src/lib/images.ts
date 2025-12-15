
const images = import.meta.glob('/src/assets/images/**/*.{jpeg,jpg,png,tiff,webp,gif,avif}');

export async function getImage(path: string) {
    if (!path) return null;

    let assetPath = path;
    // Map /images/ path to /src/assets/images/
    if (path.startsWith('/images/')) {
        assetPath = '/src/assets/images' + path.substring(7); // remove '/images'
    }

    const load = images[assetPath];
    if (!load) {
        console.error(`Image not found: ${assetPath} (requested: ${path})`);
        // Debug available keys
        // console.log('Available images:', Object.keys(images));
        return null;
    }

    const mod = await load();
    return (mod as any).default;
}
