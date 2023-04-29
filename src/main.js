import express from "express";
import { insertOneCollection } from "./appmongo/insert.util.js";
import { readDocuments } from "./appmongo/read.util.js";
import { saveRecord } from "./appmongo/saveRecord.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  let list = await readDocuments();
  res.json(list);
});

app.get("/search", async (req, res) => {
  let list = await readDocuments();
  res.json(list);
});

app.get("/insert", async (req, res) => {
  let userName = req.query.userName || "Rakesh";
  let emailId = req.query.emailId || "rakesh@gmail.com";

  let newColl = { userName: userName, emailId: emailId };
  await insertOneCollection(newColl);

  let message = { success: true };
  res.json(message);
});

app.post("/insert", async (req, res) => {
  let newDocument = req.body;
  await insertOneCollection(newDocument);

  let message = { success: true };
  res.json(message);
});

app.post("saveRecord", async (req, res) => {
  let newColl = req.body;
  await saveRecord(newColl);

  let message = { success: true };
  res.json(message);
});

app.listen(3000, () => console.log(`Example listening on port 3000`));
