import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";

export const saveOneDocument = async (newDocument) => {
  const client = new MongoClient(uri);
  const usersColl = client.db("practice").collection("users");

  let resultDoc = await usersColl.insertOne(newDocument);
  console.log(resultDoc);

  client.close();
};
