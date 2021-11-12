// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num) {
  let b = Array.from(num.toString(), Number);
  let c = new Array();
  for (const x of b) {
    c.push(x ** 2);
  }
  return parseInt(c.join(""));
}
let y = squareDigits(3212);
console.log({ y });
