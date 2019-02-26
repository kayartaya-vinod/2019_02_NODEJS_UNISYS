let nums = [12, 304, 11, 66, 70, 2, 19, 21, 11];

// let index = nums.findIndex(function (n) { 
//     // console.log('checking if', n, 'is', 70);
//     return n === 70; 
// });


let index = nums.findIndex(n => n === 70);
console.log('index of 70 is', index);

let doubleNums = nums.map(n => n + n);
console.log(nums);
console.log(doubleNums);

let evenNums = nums.filter(n => n % 2 === 0);
let oddNums = nums.filter(n => n % 2);
console.log(evenNums);
console.log(oddNums);