const admin = require("firebase-admin");
const fs = require('fs');

let key = JSON.parse(fs.readFileSync('./.jfkey.json'))

let collectionName = "comms";
let subCollection = "";

// You should replace databaseURL with your own
admin.initializeApp({
  credential: admin.credential.cert(key),
  databaseURL: "https://lienag01bot.firebaseio.com"
});

let fireDB = admin.firestore();
fireDB.settings({timestampsInSnapshots: true})

module.exports = {
    fireDB
};
