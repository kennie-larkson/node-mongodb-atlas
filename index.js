const dbconnection = require("./dbcon");

dbconnection().then(() => console.log("We are in index.js"));
