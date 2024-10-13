import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import User from "./Schema.js"
import bodyParser from "body-parser"

const app = express();
mongoose.connect("mongodb://localhost:27017/CRUD")
  .then(() => {
    console.log("Connected to DB")
  }).catch(() => {
    console.log("Not connected to DB")
  })

//to create middleware by express and create top of request
app.use(cors())
// app.use(express.json());
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  const data = await User.find();
  res.send(data);
})

app.post("/add-post", async (req, res) => {
  const { title, description, url } = req.body;
  const user = await User.create({ title, description, url });
  res.send("add post")
})

app.get("/post/:id", (req, res) => {
  console.log(res)
})

// app.get("/")
//to create server
app.listen(4000, () => console.log("App is running on port 4000"))