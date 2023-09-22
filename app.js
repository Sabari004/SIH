const bodyParser = require("body-parser");
// "mongodb+srv://sabari_admin:17kLt1BkndwqUqqS@cluster0.ppsgpcf.mongodb.net/ReactPro?retryWrites=true&w=majority"
const express = require("express");
const mongoose = require("mongoose"); // new
const cors = require("cors");
const Detail = require("./models/Detail");
const app = express();
app.use(bodyParser.json());
app.use(cors());

require("dotenv/config");
const port = process.env.PORT;
// Connect to MongoDB database
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("Connected to DB!")
);
app.get("/", async (req, res) => {
  try {
    const Details = await Detail.find();
    res.json(Details);
  } catch (err) {
    res.json({ message: err });
  }
});
// app.post("/", async (req, res) => {
//   const post = new Message({
//     message: req.body.message,
//     username: req.body.username,
//   });
//   try {
//     const savedPost = await post.save();
//     res.json(savedPost);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });
// app.get("/user", async (req, res) => {
//   try {
//     const tweets = await Tweet.find();
//     res.json(tweets);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });
// app.get("/user/:id", async (req, res) => {
//   try {
//     const posts = await User.find({ username: req.params.id });
//     res.json(posts);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });
// app.get("/user/:id/:pass", async (req, res) => {
//   try {
//     const posts = await User.find({
//       username: req.params.id,
//       password: req.params.pass,
//     });
//     res.json(posts);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });
// app.post("/user", async (req, res) => {
//   const post = new User({
//     username: req.body.username,
//     password: req.body.password,
//     email: req.body.email,
//   });
//   try {
//     const savedPost = await post.save();
//     res.json(savedPost);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
