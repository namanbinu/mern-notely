import mongoose from "mongoose";

// 1- Define the Note schema
// model based off that schema

const notesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
},{
    timestamps: true } // createdAt and updatedAt
);

const Note = mongoose.model("Note", notesSchema)

export default Note;