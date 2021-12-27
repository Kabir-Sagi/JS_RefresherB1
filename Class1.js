class Student {
  name = "Geekster";
  city = "Gurugram";
  state = "Haryana";

  print() {
    console.log(this.name, this.city, this.state);
  }
}

var s1 = new Student();
s1.print();
