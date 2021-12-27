function* fn() {
  var name;

  console.log("s2");
  yield setTimeout(() => {
    name = "Kabir";
  }, 3000);
  console.log(name);
}
var a = fn();
a.next();
a.next();
