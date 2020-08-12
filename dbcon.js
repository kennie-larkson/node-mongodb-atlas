require("dotenv").config();
const { MongoClient } = require("mongodb");

const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@${process.env.CLUSTER_URL}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

module.exports = async function dbconnection() {
  try {
    await client
      .connect()
      .then(() => console.log("Database server connection successful.."))
      .finally(() => client.close());
  } catch (error) {
    console.log("Oops:" + error);
  }
};

// connectToDB();
