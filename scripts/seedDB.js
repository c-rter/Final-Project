const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/21days"
);

/* {
  title: "The Dead Zone",
  author: "Stephen King",
  synopsis:
    "A number-one national best seller about a man who wakes up from a five-year coma able to see people's futures and the terrible fate awaiting mankind in The Dead Zone - a \"compulsive page-turner\" (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people's futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma, and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. The Dead Zone is a \"faultlessly paced...continuously engrossing\" (Los Angeles Times) novel of second sight.",
  date: new Date(Date.now())
}, */

const goalSeed = [
  {
    username: "carter",
    password: "password",
    habit: "test habit",
    dayCounter: 5,
    startDay: 305,
    habitStatus: "active",
    rollingDay: 310
  },
  {
    username: "carter",
    password: "password",
    habit: "test habit 2",
    dayCounter: 4,
    startDay: 305,
    habitStatus: "active",
    rollingDay: 309
  },
  {
    username: "nitin",
    password: "password",
    habit: "Compliment someone daily",
    dayCounter: 18,
    startDay: 20,
    habitStatus: "fail",
    rollingDay: 38
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
