import User from '../models/user.model.js';
import bcrypt from 'bcrypt';
import GoogleUserModel from '../models/google.model.js';

export const signup = async (req, res) => {
    try {
        const { username, email, password, profile_picture, bio } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists !" });
        }
        const newUser = new User({ username, email, password, profile_picture, bio });
        await newUser.save();
        // creation of token
        res.status(201).send(newUser);
    }
    catch (err) {
        console.log("Failed to create a user ! ", err);
    }
}

export const get_all_users = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (err) {
        console.log("Can not get all users", err);
    }
}
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({email});
        if (user) {
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ message: "Password does not matched !" });
            }
            res.status(200).json(user);
        }
        // creation of token 
        // res.status(200).json(user);
    }
    catch (err) {
        console.log("Can not login", err);
    }
}

// validate_comment

export const validate_comment = async(req, res)=>{
    try{
        const {email} = req.body;
        const user = await User.findOne({email});
        if(user){
            res.status(200).json(user);
        }
    }catch(err){
        console.log("Can not validate comment !", err);
    }
}


// get a user
export const get_a_user = async (req, res) => {
    try {
        const userId = req.params.id;
        // // Use Promise.all to query both models concurrently
        const [user, googleLogin] = await Promise.all([
            User.findById(userId), // Query User model
            GoogleUserModel.findById(userId) // Query GoogleLogin model
        ]);
        // const response = await GoogleUserModel.findById(userId);
        // Log and send the response
        if (user) {
            return res.status(200).json(user);
        }
        if (googleLogin) {
            return res.status(200).json(googleLogin)
        }

    } catch (err) {
        console.error("Error fetching data from models:", err);
        res.status(500).json({ message: "An error occurred", error: err });
    }
};
