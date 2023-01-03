import mongoose, { model } from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    roll: {
        type: Number,
        required:true
    },
    isGood: {
        type: Boolean,
        required:true
    },
    date: {
        type: Date,
        default:Date.now()
    }
})
module.exports = model('Todo', userSchema);