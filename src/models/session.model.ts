import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";
import { UserDocument } from "./user.model";

export interface SchemaDocument extends mongoose.Document { 
    user: UserDocument["_id"]; // user references UserDocument
    valid: string;
    userAgent: string;
    createdAt: Date;
    updatedAt: Date;

};

const sessionSchema = new mongoose.Schema({  
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // referance user model
    valid: { type: Boolean, default: true },
    userAgent: {type: String}, // Store the users browser that they created that session in
},
    {
        timestamps: true, 
    }
);

const SessionModel = mongoose.model("Session", sessionSchema); 

export default SessionModel;