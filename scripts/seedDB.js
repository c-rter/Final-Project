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
    habit: "practice French language",
    dayCounter: 5,
    dailyStatus: 0,
    habitStatus: "active"
  },
  {
    username: "carter",
    password: "password",
    habit: "run at the beach",
    dayCounter: 7,
    dailyStatus: 1,
    habitStatus: "fail"
  },
  {
    username: "carter",
    password: "password",
    habit: "brush cat",
    dayCounter: 21,
    dailyStatus: 1,
    habitStatus: "achieve"
  },
  {
    username: "raj",
    password: "password",
    habit: "Practice archery",
    dayCounter: 22,
    dailyStatus: 0,
    habitStatus: "achieve"
  },
  {
    username: "raj",
    password: "password",
    habit: "Learn a new word",
    dayCounter: 8,
    dailyStatus: 0,
    habitStatus: "active"
  },
  {
    username: "raj",
    password: "password",
    habit: "Cook dinner",
    dayCounter: 15,
    dailyStatus: 0,
    habitStatus: "fail"
  },
  {
    username: "abbas",
    password: "password",
    habit: "Practice boxing",
    dayCounter: 6,
    dailyStatus: 0,
    habitStatus: "fail"
  },
  {
    username: "abbas",
    password: "password",
    habit: "wake up early",
    dayCounter: 10,
    dailyStatus: 1,
    habitStatus: "active"
  },
  {
    username: "abbas",
    password: "password",
    habit: "learn guitar",
    dayCounter: 2,
    dailyStatus: 1,
    habitStatus: "active"
  },
  {
    username: "nitin",
    password: "password",
    habit: "Write poem everyday",
    dayCounter: 5,
    dailyStatus: 0,
    habitStatus: "fail"
  },
  {
    username: "nitin",
    password: "password",
    habit: "Practice swimming",
    dayCounter: 17,
    dailyStatus: 0,
    habitStatus: "active"
  },
  {
    username: "nitin",
    password: "password",
    habit: "Compliment someone daily",
    dayCounter: 21,
    dailyStatus: 1,
    habitStatus: "achieve"
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
