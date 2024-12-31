/**
 * This module contains functions to shuffle an array
 * @module
 */

/**
 * Shuffles the elements of an array randomly using the Fisher-Yates algorithm.
 * 
 * @param input The array to shuffle.
 * @returns A new array with the elements shuffled in random order.
 */
export function shuffle<T>(input: T[]): T[] {
  const output = [...input];
  for (let i = output.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [output[i], output[j]] = [output[j], output[i]];
  }
  return output;
}

export default shuffle;
