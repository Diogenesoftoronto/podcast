// this function doubles the zeroes in a array. the array stays the same length

function doubleZeroes (arr) {
  let result = arr; let split;

  for (let i = 0; i < result.length; i++) {
    if (result[i] === 0) {
      result.pop();
      split = result.splice(i+1);
      result.push(0);
      result = result.concat([...split]);
      i += 2;
    }
  }
  return result;
};

let array = [1, 0, 2, 0, 3, 5, 0];
// console.log(typeof array)
val = doubleZeroes(array)
console.log(val);
