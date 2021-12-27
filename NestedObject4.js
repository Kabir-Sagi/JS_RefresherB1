var obj1 = {
  name: "S1",
  getMarks: function () {
    return 89;
  },
};

console.log(obj1.getMarks());

var obj2 = {
  x: function (name) {
    return name;
  },
};

var newValue = obj2.x("Geekster");
console.log(newValue);

var obj3 = {
  name: function (x) {
    console.log(x);
  },
};

obj3.name("Delhi");
