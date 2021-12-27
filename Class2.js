class Employee {
  id = 1;
  name = "E1";
  Department = "Operation";

  printData() {
    this.id = 101;
    console.log(this.id, this.name, this.Department);
  }
}

var e1 = new Employee(); //Instance

var e2 = new Employee(); //Instance

e1.printData();
e2.printData();

e2.name = "E2";
console.log("--------------------------------------------------");
e1.printData();
e2.printData();
