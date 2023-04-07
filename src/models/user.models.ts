import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";

export interface UserDocument extends mongoose.Document { // matching schemas (ts definition for userSchema)
    email: string;
    name: string;
    password: string;
    createdAt: Date; // timestamps true
    updatedAt: Date;
    comparePassword(candidatePassword: string): Promise<boolean> //comparePassword method

}

const userSchema = new mongoose.Schema({  // schema definition
    email: { type: String, required: true, unique: true }, // first argument(object)
    name: { type: String, required: true },
    password: { type: String, required: true },
},
    {
        timestamps: true, // second argument(object), providing createdAt and updatedAt automatically
    }
);

userSchema.pre("save", async function (next) { //next is an argument (mongoose.HookNextFunction does not exist)
    let user = this as UserDocument

    if (!user.isModified("password")) { //if presave is not modifying password
        return next();
    }

    const salt = await bcrypt.genSalt(config.get<number>("saltWorkFactor")); //password is modified

    const hash = await bcrypt.hashSync(user.password, salt);

    user.password = hash; //replacing users password with hash

    return next();
});

userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {  //compare password with hash, function supply candidate password, password written on interface box for password will end in candidatePassword
    const user = this as UserDocument;                                             // 

    return bcrypt.compare(candidatePassword, user.password).catch((e) => false);   //if candidatePassword is correct return true, otherwise false

};

const UserModel = mongoose.model("User", userSchema); // model

export default UserModel;