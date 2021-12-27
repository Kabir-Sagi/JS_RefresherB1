function fn() {
  var name = "Geekster";
  var city = "Delhi";
  console.log(name, city);
}

// fn(); // function call

function fn1(f) {
  f();
}

fn1(function () {
  console.log("I am callback function");
});
