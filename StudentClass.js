class Student {
  name;
  city;

  constructor() {
    this.name = "Kabir";
    this.city = "Hyderabad";
  }

  getData() {
    console.log(this.name, this.city);
  }
}

var student1 = new Student();
student1.name = "s1";
student1.city = "c1";
student1.getData();

var student2 = new Student();
student2.name = "s2";
student2.city = "c2";
student2.getData();
