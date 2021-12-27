var studentDetails = {
  id: 1001,
  name: "Shiva",
  email: "Shiva@gmail.com",
  phone: 9999999,
  address: {
    city: {
      area: "Thane",
    },
    state: "MH",
  },
  qualification: [
    { degree: "Btech", percentage: "90%" },
    { degree: "Mtech", percentage: "92%" },
  ],
};
// console.log(studentDetails.address.city.area);
studentDetails.address.city.area;

console.log(
  studentDetails.qualification[1].percentage,
  studentDetails.qualification[0].percentage
);
