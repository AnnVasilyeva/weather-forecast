// map<T, V>(callback: (element: T) => V, collection: T[]): V[]

/**
 * @template T
 * @template V
 * @param {T[]} collection: T[] - A parameter must be a Array<object>
 *  @param {Function} callback - A parameter must be a function
 * @return {V[]} - This is the result
 */

function map(callback, collection) {
  return collection.reduce((accumulator, current) => {
    const mappedItem = callback(current);
    return [...accumulator, mappedItem];
  }, [])

}

/**
 * @template W
 * @template X
 * @param {W} item - A parameter must be a number
 * @return {X} - This is the result
 */

function mapCallback (item) {
  return item + 1;
}

console.log(map(mapCallback, [1, 2, 3, 4]));