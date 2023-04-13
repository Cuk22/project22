import mongoose from "mongoose";
import { customAlphabet } from "nanoid";
import { UserDocument } from "./user.model";
import { custom } from "zod";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 10); // allow to create custom alphabet from nanoid

export interface ProductDocument extends mongoose.Document {
    user: UserDocument["_id"]; // user that created the product
    title: string;
    description: string;
    price: number;
    image: string;
    createdAt: Date;
    updatedAt: Date;

};

// this is going to create an id, that is prefixed with product (add an id generated in line 6)
const productSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true,
        unique: true,
        default: () => `product_${nanoid()}` // this is going to create an id
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: { type: String, required: true },
    descripton: { type: String, required: true }, 
    price: { type: Number, required: true }, 
    image: { type: String, required: true },
},
    {
        timestamps: true,
    }
);

const ProductModel = mongoose.model<ProductDocument>("Product", productSchema);

export default ProductModel;