import { Request, Response } from "express";
import { createProductInput, updateProductInput } from "../schema/product.schema";
import { createProduct, deleteProduct, findAndUpdateProduct, findProduct } from "../services/product.service";
export async function createProductHandler(req: Request<{}, {}, createProductInput["body"]>, res: Response) {
    // create product requst params: no params, no response body, createProductInput
    const userId = res.locals.user._id 

    const body = req.body

    const product = await createProduct({...body, user: userId})

    return res.send(product);
};


export async function getProductHandler(req: Request<updateProductInput["params"]>, res: Response) {

    const productId = req.params.productId; // get product id from params
    
    const product = await findProduct({productId});

    if (!product) {
        return res.sendStatus(404);
    }

    return res.send(product);

}; 

export async function updateProductHandler(req: Request<updateProductInput["params"]>, res: Response) {
    // update product request params: params: updateProductInput 


    const userId = res.locals.user._id;

    const productId = req.params.productId;

    const update = req.body;

    const product = await findProduct({ productId });

    if (!product) {
        return res.sendStatus(404)
    }


    // user that created the product is not the user thats trying to update it
    if (String(product.user) !== userId) { // product.user was mongoose object id and userId is string
        return res.sendStatus(403)
    }

    const updatedProduct = await findAndUpdateProduct({ productId }, update, { new: true }); // new: true = options

    return res.send(updatedProduct);
};


export async function deleteProductHandler(req: Request<updateProductInput["params"]>, res: Response) {
    
    const userId = res.locals.user._id;

    const productId = req.params.productId;

    const product = await findProduct({ productId });

    if (!product) { // make sure product exists
        return res.sendStatus(404);
    } 


    // user that created the product is not the user thats trying to delete it
    if (String(product.user) !== userId) {
        return res.sendStatus(403);
    }

    await deleteProduct({ productId });

    return res.sendStatus(200);
};

// create is going to have body of product
// get, update and delete are going to have params with id