let a = 10;

function f1() {
  let b = 20;
  console.log(a);
  console.log(b);
  if (b == 20) {
    var c = 30;
  }
  console.log(c);
}

f1();
