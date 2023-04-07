import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";

export interface UserDocument extends mongoose.Document { // matching schemas
    email: string;
    name: string;
    password: string;
    createdAt: Date; // timestamps true
    updatedAt: Date;


}

const userSchema = new mongoose.Schema({  // schema definition
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
},
    {
        timestamps: true,
    }
);

userSchema.pre("save", async function (next: mongoose.HookNextFunction) {
    let user = this as UserDocument

    if (!user.isModified("password")) {
        return next();
    }

    const salt = await bcrypt.genSalt(config.get<number>("saltWorkFactor"));

    const hash = await bcrypt.hashSync(user.password, salt);

    user.password = hash;

    return next();
});

const UserModel = mongoose.model("User", userSchema) // model

export default UserModel;