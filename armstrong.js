const myBody = document.getElementsByClassName("girdi");
myBody[0].innerHTML = armstrong(369);

function armstrong(x) {
  let a = x.toString().length;
  let b = Array.from(x.toString(), Number);
  let total = 0;
  for (i of b) {
    total = total + i ** a;
  }
  if (total === x) {
    return `${x} is an Armstrong number.`;
  } else {
    return `${x} is not an Armstrong number.`;
  }
}
