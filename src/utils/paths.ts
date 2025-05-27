/**
 * Utility function to generate the correct asset path
 * Works both locally and on GitHub Pages
 */
export function getAssetPath(path: string): string {
  // For GitHub Pages, always use the basePath
  const basePath = '/Portfolio';
  return `${basePath}${path}`;
}

/**
 * Utility function to generate the correct public asset path
 */
export function getPublicPath(filename: string): string {
  return getAssetPath(`/${filename}`);
}
