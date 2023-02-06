const mongoose = require("mongoose");
const { Schema } = mongoose;
const CollectionSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
  },
  comments: {
    type: Array,
  },
  likes: {
    type: Array,
    required: true,
    default: [],
  },
});

const dummyLike = {
  owner: "Abdullah",
  isLiked: true, // we will toggle this
};
const dummyCollection = {
  name: "Book collection",
  category: "Collection 1",
  description: "lorem ipsum dolor sit amet, consectetur adip lorem, sed diam",
  image: "http://unsplash.com/",
  tags: ["natures", "flower", "mountain", "sea"],
  comments: [{ body: "Lorem ipsum dolor sit amet, consect", owner: "Jack" }],
  likes: [
    {
      owner: "Abdullah",
      isLiked: true, // we will toggle this
    },
    {
      owner: "Brown",
      isLiked: true, // we will toggle this
    },
    {
      owner: "Abdurahmon",
      isLiked: true, // we will toggle this
    },
  ],
};

// how we calculate the total number of likes for this collection
dummyCollection.likes.filter((e) => {
  return e.isLiked == true;
}).length;

exports.CollectionSchema = CollectionSchema;
exports.dummyCollection = dummyCollection;
