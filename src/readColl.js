import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";

const readCollection = async () => {
  const client = new MongoClient(uri);
  const userColl = client.db("practice").collection("users");

  const userData = await userColl.findOne();
  console.log(userData);

  client.close();
};
readCollection();
