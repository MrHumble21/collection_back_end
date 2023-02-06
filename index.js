const express = require("express");
const jsonwebtoken = require("jsonwebtoken");
const {
  UserModel,
  CollectionModel,
  CommentModel,
  CategoryModel,
  FavouriteModel,
} = require("./database/models/database");
const { dummyData } = require("./database/models/User");
const bodyParser = require("body-parser");
const { dummyCollection } = require("./database/models/Collection");
const { dummyComment } = require("./database/models/Comment");
const { dummyCategory } = require("./database/models/Category");
const { dummyFavourite } = require("./database/models/Favourite");
const JWT_SECRET =
  "goK!pusp6ThEdURUtRenOwUhAsWUCLheBazl!uJLPlS8EbreWLdrupIwabRAsiBu";

const app = express();
app.use(bodyParser.json());

app.get("/login", async (req, res) => {
  const user = await UserModel.find({ role: "Admin" });
  if (user[0]?.role == "Admin") {
    res.json({ admin: "admin", user });
  } else {
    res.json({ user: "user", user });
  }
});
/* ------------------------  ADMIN AREA START  ---------------------- */
app.post("/admin", async (req, res) => {
  if (req.body.role == "Admin") {
    const users = await UserModel.find({});
    res.json({ users: users });
  } else {
    res.status(401).send("not Authorized");
  }
});
app.get("/:id", (req, res) => {
  res.send(`<h1>${req.params.id}</h1>`);
});

/* all admin crud actions start ... */
app.post("/create_category", async (req, res) => {
  const category = await CategoryModel.create(
    dummyCategory,
    (err, category) => {
      res.json({ category: category });
    }
  );
});

app.post("/create_favourite", async (req, res) => {
  const fav = await FavouriteModel.create(dummyFavourite, (err, fav) => {
    res.json({ favourite: fav });
  });
});

/* all admin crud actions end ... */

app.post("/admin", async (req, res) => {
  if (req.body.role == "Admin") {
    const users = await UserModel.find({});
    res.json({ users: users });
  } else {
    res.status(401).send("not Authorized");
  }
});
/* ------------------------  ADMIN AREA END  ---------------------- */

/* ------------------------  CREATE USER COMMENT COLLECTION START  ---------------------- */
app.post("/create_user", async (req, res) => {
  const newUser = await UserModel.create(dummyData);
  res.json({ newUser });
});

app.post("/create_collection", async (req, res) => {
  const newCollection = await CollectionModel.create(dummyCollection);
  res.json({ newCollection });
});

app.post("/create_comment", async (req, res) => {
  const newComment = await CommentModel.create(dummyComment);
  res.json({ newComment });
});
/* ------------------------  CREATE USER COMMENT COLLECTION END  ---------------------- */

app.listen(8888, (err) => {
  console.log("server listening on port 8888");
});

// http://localhost:8888/I-am-getting-params-from {% request 'url', '', 0 %}
