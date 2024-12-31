/**
 * This module contains a function to split an array into chunks of a specified size.
 * @module
 */

/**
 * Splits an array into smaller arrays (chunks) of a specified size.
 * 
 * @param input The array to be divided into chunks.
 * @param chunkSize The size of each chunk. Must be a positive integer.
 * @returns An array of chunks, where each chunk is an array containing elements from the input array.
 */
export function chunk<T>(input: T[], chunkSize: number): T[][] {
  const output: T[][] = [];
  for (let i = 0; i < input.length; i += chunkSize) {
    output.push(input.slice(i, i + chunkSize));
  }
  return output;
}

export default chunk;
