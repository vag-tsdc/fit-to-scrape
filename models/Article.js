// Article.js

// require mongoose
var mongoose = require("mongoose");
var Note = require("./Note");

// create schema class
var Schema = mongoose.Schema;

// create aricle schema
var ArticleSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    summary: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    saved: {
      type: Boolean,
      default: false
    },
    notes: [{
       type: Schema.Types.ObjectId,
       ref: "Note"
    }]
  });

// create the article model with the ArticleSchema
var Article = mongoose.model("Article", ArticleSchema);

// Export the model
module.exports = Article;
