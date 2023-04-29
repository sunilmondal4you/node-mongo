import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";

export const readDocuments = async () => {
  const client = new MongoClient(uri);
  const usersColl = client.db("practice").collection("users");

  let list = await usersColl.find({}).toArray();

  return list;
};

// readDocuments();
