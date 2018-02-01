// Note.js


// require mongoose
var mongoose = require("mongoose");

//  create schema class
var Schema = mongoose.Schema;

// create the Note schema
var NoteSchema = new Schema({
    body: {
        type: String
    },
    article: {
        type: Schema.Types.ObjectId,
        ref: "Article"
    }
});

//  create the Note model with the NoteSchema
var Note = mongoose.model("Note", NoteSchema);

//  Export the Note model
module.exports = Note;
