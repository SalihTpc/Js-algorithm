const myBody = document.getElementsByClassName("girdi");
let c = prompt("Number Please:");
console.log({ c });
myBody[0].innerHTML = fizzBuzz(c);

function fizzBuzz(x) {
  if (x % 5 == 0 && x % 3 == 0) {
    return `${x} FizzBuzz`;
  } else if (x % 5 == 0) {
    return `${x} Buzz`;
  } else if (x % 3 == 0) {
    return `${x} Fizz`;
  } else {
    return `${x} Nothing`;
  }
}
