const mongoose = require("mongoose");
const db = require("../models");

// this file empties your Model collection and inserts new documents

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/reactMongo"
);

const modelSeed = [
    {
        name: "Hinata Shoyo",
        age: 15,
        isBool: false,
        date: new Date(Date.now()),
        array: ["Karasuno", "MSBY"],
        nested: {
            item: "Middle Blocker"
        },
        map: new Map("nickname", "the greatest decoy")
    },
    {
        name: "Kageyama Tobio",
        age: 15,
        isBool: false,
        date: new Date(Date.now()),
        array: ["Karasuno", "Scheweiden"],
        nested: {
            item: "Setter"
        },
        map: new Map("nickname", "king of the court")
    }
];

db.Model
  .remove({})
  .then(() => db.Model.collection.insertMany(modelSeed))
  .then(data => {
      console.log(data.result.n + " records inserted!")
      process.exit(0);
  })
  .catch(err => {
      console.log(err);
      process.exit(1);
  })
