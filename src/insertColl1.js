import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";

const addOneRecod = async () => {
  const client = new MongoClient(uri);
  const usersColl = client.db("practice").collection("users");

  let newDocument = { userName: "Deepak", emailId: "deepak@gamil.com" };
  let resultDoc = await usersColl.insertOne(newDocument);
  console.log(resultDoc);

  client.close();
};

addOneRecod();
