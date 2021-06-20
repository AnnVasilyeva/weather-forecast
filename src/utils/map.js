// map<T, V>(callback: (element: T) => V, collection: T[]): V[]

const animals = [
  {name: 'Simba', kind: 'cat', owner: 'Ann'},
  {name: 'Archie', kind: 'cat', owner: 'Jack'},
  {name: 'Charlie', kind: 'dog', owner: 'Alex'},
  {name: 'Buddy', kind: 'dog', owner: 'Mary'},
]

/**
 * @template {Object.<string, string>} T  - T must be a object
 * @template {string} V  - V must be a string
 * @param {Array<object>} collection: T[] - A parameter can be a Array<object>
 * @return {string[]} - This is the result
 */

function getCatOwners (collection) {
  return collection.reduce((accumulator, current) => current.kind === 'cat' ? [...accumulator, current.owner] : accumulator, []);
}

const catOwners = getCatOwners(animals);

console.log(catOwners);