var studentDetails = {
  id: 1001,
  name: "Shiva",
  email: "Shiva@gmail.com", // studentDetails.address.city.area[1].s1.a1
  phone: 9999999,
  address: {
    city: {
      area: [
        {
          s1: {
            a1: "data1",
          },
        },
        {
          s1: {
            a1: "data2",
          },
        },
      ],
    },
    state: "MH",
  },
  qualification: [
    { degree: "Btech", percentage: "90%" },
    { degree: "Mtech", percentage: "92%" },
  ],
};
console.log(studentDetails.address.city.area[1]);

console.log(studentDetails.address.city.area[1].s1.a1);
