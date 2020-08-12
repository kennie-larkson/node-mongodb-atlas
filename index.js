require("dotenv").config();
const { MongoClient } = require("mongodb");

const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@gettingstartedcluster.xyzpf.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

async function run() {
  try {
    await client
      .connect()
      .then(() => console.log("Database server connection successful.."));
  } catch (error) {
    console.log("Oops:" + error);
  }
}

run().finally(() => client.close());
