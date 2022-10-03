import mongoose, { Schema } from "mongoose";

const TextSchema = new Schema({
    text: Array
})

export default mongoose.model("TextSchema", TextSchema);
// export default TextSchema