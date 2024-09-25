/**
 * Randomly shuffles an input array and returns the result. This method does not mutate the input.
 */
export function shuffleArray<T>(input: Array<T>): Array<T> {
  return input
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}
