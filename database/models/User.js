const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  favourite: {
    type: Array,
  },

  sentComments: {
    type: Array,
  },
  receivedComments: {
    type: Array,
  },
  role: {
    type: String,
    required: true,
  },
});

const dummyData = {
  fullName: "Abdulboriy Malikov",
  gender: "Male",
  email: "malikov.udemy@gmail.com",
  phone: "+998 90 017 42 90",
  sentComments: [
    {
      to: "Abdulboriy",
      body: "This is a comment which I have sent to someone",
    },
  ],
  receivedComments: [
    {
      sender: "Malika",
      body: "This is a comment which I have sent to someone",
    },
  ],
  role: "User",
};

exports.UserSchema = UserSchema;

exports.dummyData = dummyData;
