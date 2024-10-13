import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    url:{
        type: String,
        required: true,
    },
});

const User = mongoose.model("user", userSchema);
export default User;