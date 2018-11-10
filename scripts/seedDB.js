// This file empties the Goals database and inserts the goals below

const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/21days"
);



/* 

YDAY is a 1-365 Integer of Current Day relative to First Day of Year

This database is constructed based on a YDAY value of: 313 (November 9)

Update your seeds relative to current YDAY

*/

const goalSeed = [
  {
    username: "carter",
    password: "password",
    habit: "Meditate Every Day",
    dayCounter: 5,
    startDay: 307,
    habitStatus: "active",
    rollingDay: 312
  },
  {
    username: "carter",
    password: "password",
    habit: "Practice Guitar",
    dayCounter: 20,
    startDay: 292,
    habitStatus: "active",
    rollingDay: 312
  },
  {
    username: "carter",
    password: "password",
    habit: "Eat Fewer Calories",
    dayCounter: 9,
    startDay: 301,
    habitStatus: "fail",
    rollingDay: 311
  },
  {
    username: "carter",
    password: "password",
    habit: "Learn C# - 15 minutes",
    dayCounter: 7,
    startDay: 306,
    habitStatus: "active",
    rollingDay: 313
  },
  {
    username: "carter",
    password: "password",
    habit: "Eat an apple",
    dayCounter: 11,
    startDay: 302,
    habitStatus: "active",
    rollingDay: 313
  },
  {
    username: "abbas",
    password: "password",
    habit: "check in to Khan Academy",
    dayCounter: 12,
    startDay: 300,
    habitStatus: "active",
    rollingDay: 312
  },
  {
    username: "abbas",
    password: "password",
    habit: "Bike to work",
    dayCounter: 21,
    startDay: 291,
    habitStatus: "achieve",
    rollingDay: 313
  },
  {
    username: "abbas",
    password: "password",
    habit: "Go to bed by 11pm",
    dayCounter: 5,
    startDay: 306,
    habitStatus: "fail",
    rollingDay: 311
  },
  {
    username: "abbas",
    password: "password",
    habit: "Tidy Room",
    dayCounter: 12,
    startDay: 301,
    habitStatus: "active",
    rollingDay: 313
  },
  {
    username: "abbas",
    password: "password",
    habit: "do 20 push ups",
    dayCounter: 10,
    startDay: 303,
    habitStatus: "active",
    rollingDay: 313
  },
  {
    username: "raj",
    password: "password",
    habit: "eat breakfast",
    dayCounter: 5,
    startDay: 307,
    habitStatus: "active",
    rollingDay: 312
  },
  {
    username: "raj",
    password: "password",
    habit: "Practice drawing",
    dayCounter: 21,
    startDay: 292,
    habitStatus: "achieve",
    rollingDay: 313
  },
  {
    username: "raj",
    password: "password",
    habit: "Practice algorithms",
    dayCounter: 9,
    startDay: 301,
    habitStatus: "fail",
    rollingDay: 311
  },
  {
    username: "raj",
    password: "password",
    habit: "Talk to a new person",
    dayCounter: 7,
    startDay: 306,
    habitStatus: "active",
    rollingDay: 313
  },
  {
    username: "raj",
    password: "password",
    habit: "Do a crossword",
    dayCounter: 21,
    startDay: 301,
    habitStatus: "achieve",
    rollingDay: 314
  },
  {
    username: "nitin",
    password: "password",
    habit: "practice mma training",
    dayCounter: 5,
    startDay: 307,
    habitStatus: "active",
    rollingDay: 312
  },
  {
    username: "nitin",
    password: "password",
    habit: "Work on novel",
    dayCounter: 20,
    startDay: 292,
    habitStatus: "active",
    rollingDay: 312
  },
  {
    username: "nitin",
    password: "password",
    habit: "Spend time with family",
    dayCounter: 21,
    startDay: 290,
    habitStatus: "achieve",
    rollingDay: 311
  },
  {
    username: "nitin",
    password: "password",
    habit: "Learn something new",
    dayCounter: 21,
    startDay: 306,
    habitStatus: "achieve",
    rollingDay: 313
  },
  {
    username: "nitin",
    password: "password",
    habit: "Organize house",
    dayCounter: 10,
    startDay: 303,
    habitStatus: "fail",
    rollingDay: 313
  }
];

db.Goal
  .remove({})
  .then(() => db.Goal.collection.insertMany(goalSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
