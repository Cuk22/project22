import { DocumentDefinition } from "mongoose";
import { omit } from "lodash";
import UserModel, { UserDocument } from "../models/user.model";

export async function createUser(input: DocumentDefinition<Omit<UserDocument, "createdAt" | "updatedAt" | "comparePassword">>) {
    try {
        const user = await UserModel.create(input) // before importing omit return await UserModel.create(input)
        return omit(user.toJSON(), "password");
    } catch (e: any) {
        throw new Error(e)
    }

};

// this function will take email and password
export async function validatePassword({ email, password }: { email: string, password: string }) { // this password is candidate password
    const user = await UserModel.findOne({ email });  // find user by email address
    if (!user) {                                    // if user doesnt exists
        return false;
    }

    const isValid = await user.comparePassword(password); // if user exists call compare password function

    if (!isValid) return false;

    return omit(user.toJSON(), "password");

};  