import fs from 'fs';

/**
 * Loads json from a file on the disk
 */
export function parseJson(filename) {
  const json = fs.readFileSync(filename, 'utf8')
              .replace(/\s*\/\/.+/g, '')
              .replace(/,(\s*\})/g, '}');
  return JSON.parse(json);
}

/**
 * Parses a csv into a 2d-array of strings.
 * Use your own data-types to parse out the results
 */
export function parseCSV(filename) {
  const file = fs.readFileSync(filename, 'utf8');
  const elements = file.split('\r\n').map(value => value.split(',').forEach(str => str.trim()));
  return elements;
}