import express from "express";
import { saveOneDocument } from "./appmongo/insert.util.js";
import { readDocuments } from "./appmongo/read.util.js";

const app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

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
  await saveOneDocument(newColl);

  let message = { success: true };
  res.json(message);
});

app.post("/insert", async (req, res) => {
  let newDocument = req.body;
  await saveOneDocument(newDocument);

  let message = { success: true };
  res.json(message);
});

app.listen(3000, () => console.log(`Example listening on port 3000`));
