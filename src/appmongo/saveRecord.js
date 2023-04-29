import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";

export const saveRecord = async (reqData) => {
  let client = new MongoClient(uri);
  let userColl = client.db("practice").collection("users");

  let result = await userColl.insertOne();
  console.log(result);
  client.close();
};
