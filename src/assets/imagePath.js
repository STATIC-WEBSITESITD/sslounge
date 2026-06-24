export function imagePath(filename) {
  return new URL(`./images/${filename}`, import.meta.url).href
}
