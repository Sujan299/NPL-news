import mongoose from 'mongoose';
const GoogleUserSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    image: {
        type: String,
    }
})


const GoogleUserModel = mongoose.model("google-logins", GoogleUserSchema);

export default GoogleUserModel;