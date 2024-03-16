import mongoose, {Schema} from "mongoose";

const colorSchema = new Schema({
    nombre:{
        type: String,
        required: true,
        unique: true,
        minLength:4,
        maxlength:10
    },
    color:{
        type: String,
        require: true,
        unique: true
    }
})

const Color = mongoose.model('color',colorSchema);

export default Color;