var studentDetails = {
  id: 1001,
  name: "Shiva",
  email: "Shiva@gmail.com",
  phone: 9999999,
  isPlaced: true,
};
//Accessing the properties of your object

// console.log(studentDetails.phone);
// console.log(studentDetails.email);
// console.log(studentDetails);

//Insert new Property in Object
studentDetails.city = "Indore";

console.log(studentDetails);

//update the Property
studentDetails.name = "Shiva Kumar";

console.log(studentDetails);

//delete the Property
delete studentDetails.phone;
delete studentDetails.isPlaced;

console.log(studentDetails);
console.log(studentDetails.name, studentDetails.city);
