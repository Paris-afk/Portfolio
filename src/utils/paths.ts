/**
 * Utility function to generate the correct asset path
 * Works both locally and on GitHub Pages
 */
export function getAssetPath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' && process.env.GITHUB_ACTIONS === 'true' 
    ? '/Portfolio' 
    : '';
  
  return `${basePath}${path}`;
}

/**
 * Utility function to generate the correct public asset path
 */
export function getPublicPath(filename: string): string {
  return getAssetPath(`/${filename}`);
}
