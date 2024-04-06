//+ The simplest way to create an array of numbers: example in the (Range Utility) file
export const range = (start = 0, end, step = 1) => {
  let output = [];

  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }

  for (let i = start; i < end; i += step) {
    output.push(i);
  }

  return output;
};

//+ roundTo decimal:
export const roundTo = (number, places = 0) =>
  Math.round(number * 10 ** places) / 10 ** places;

// console.log(roundTo(number, 2));

//+ Celsius to Fahrenheit: By me
// function convertToCelsius(f, decimal) {
//   const result = Number(
//     ((f - 32) * (5 / 9)).toFixed(decimal)
//   );
//   return result;
// }
// function convertToFahrenheit(c, decimal) {
//   const result = Number(
//     (c * (9 / 5) + 32).toFixed(decimal)
//   );
//   return result;
// }

//+ The most reliable way to get a num between a min and a max:
// Or just use (Math.floor(Math.random() * 100) + 1)
//? if you want 0 to be included use clamp
// const clamp = (val, min = 0, max = 1) => {
//   if (min > max) {
//     [min, max] = [max, min];
//   }

//   return Math.max(min, Math.min(max, val));
// };

//+ Make an Array from an Object:
// const initialToppings = {
//   anchovies: false,
//   chicken: false,
//   tomatoes: false,
// };

// const x = Object.keys(initialToppings); // ['anchovies', 'chicken', 'tomatoes']

// //+ Return a random element of an array:
// export const sample = (arr) => {
//   return arr[Math.floor(Math.random() * arr.length)];
// };

//! NumberFormat: A very powerful API to format numbers

// const formattedPrice = new Intl.NumberFormat('en-US', {
//   style: 'currency',
//   currency: 'USD',
// }).format(price);

//! Measure time spent: Performance.

// console.time('filter array');
// let visibleTodos = getFilteredTodos(todos, filter); // amy statement
// console.timeEnd('filter array');

// //* Memoised expensive calculations: NOTE : useMemo won’t make the first render faster. It only helps you skip unnecessary work on updates.

// console.time('filter array');
// let visibleTodos2 = useMemo(() => {
//   return getFilteredTodos(todos, filter); // Skipped if todos and filter haven't changed
// }, [todos, filter]);
// console.timeEnd('filter array');

//! Create Fake Delay:
// const delay = (ms) =>
//   new Promise((resolve) => setTimeout(resolve, ms));

// export async function getProfileInfo(profileId) {
//   // This method simulates a database request.
//   // For realism, we'll wait about half a second.
//   await delay(Math.random() * 200 + 400);

//   return DATA[profileId];
// }

//! Filter an array of objects to match a letter/word
// export function filterItems(items, query) {
//   query = query.toLowerCase();
//   return items.filter((item) =>
//     item.name
//       .split(' ')
//       .some((word) => word.toLowerCase().startsWith(query))
//   );
// }
