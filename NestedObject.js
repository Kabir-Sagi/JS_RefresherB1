var studentDetails = {
  id: 1001,
  name: "Shiva",
  email: "Shiva@gmail.com",
  phone: 9999999,
  address: {
    city: "Pune",
    state: "MH",
  },
};

console.log(studentDetails.address.state);
studentDetails.address.city = "Mumbai";
console.log(studentDetails);
