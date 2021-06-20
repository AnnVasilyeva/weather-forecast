// filter<T>(predicate: (element: T) => boolean, collection: T[]): T[]

/**
 * @template T  - T must be a number
 * @param {T[]} collection - A parameter can be a Array<number>
 * @return {T[]} - This is the result
 */

 function filter(callback, collection) { 
  return collection.reduce((accumulator, current) => {
    const filteredItem = callback(current);
    if(filteredItem) {
      return [...accumulator, current] 
    } else {
      return accumulator
    }
  }, []);
}

/**
 * @template V  - V must be a number
 * @param {V} item - A parameter can be a number
 * @return {boolean} - This is the result
 */

function filterCallback (item) {
  if(item > 30) {
    return true
  } else {
    return false
  }

}

const num = [1, 56, 98, 13, 24, 41, 5, 32]

console.log(filter(filterCallback, num));