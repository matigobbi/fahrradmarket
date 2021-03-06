
const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    likes: Array,
    owner: String,
    owneremail: String,
    imageUrl: String,  
    title: String,
    type: String,
    price: Number,
    description: String,
    framesize: String,
    framematerial: String,
    brakes: String,
    tubes: String,
    years: String,
    zipcode: String,
    city: String,
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Post = model("Post", postSchema);

module.exports = Post;