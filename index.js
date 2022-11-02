function getMin(arr) {
  let newArr = arr.sort((a, b) => a - b);
  return newArr[0];
}

// Implement the getMin(arr) function, which takes an array of numbers arr and returns the smallest number of the array. To solve the problem, you must use one of the methods to specify the context of this. It is forbidden to use any cycl

const arr = [2, 8, 0, -5, 15, 995];
console.log(getMin(arr));
