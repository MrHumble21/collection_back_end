User.create(
  {
    fullName: "Administrator",
    gender: "Male",
    email: "admin@gmail.com",
    phone: "+998 90 017 42 90",
    sentComments: [
      {
        to: "",
        body: "",
      },
    ],
    receivedComments: [
      {
        sender: "",
        body: "",
      },
    ],
    role: "Admin",
  },
  (error, user) => {
    if (error) {
      console.log(error);
    } else {
      console.log(user);
    }
  }
);
