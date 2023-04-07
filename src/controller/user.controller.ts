import { Request, Response } from "express";
import { omit } from "lodash";
import { createUser } from "../services/user.service";
import logger from "../utils/logger";
import { CreateUserInput } from "../schema/user.schema";

export async function createUserHandler(req: Request<{}, {}, CreateUserInput>["body"], res: Response) { // all handlers are going to take same input
    try {
        const user = await createUser(req.body) // call create user service
        return res.send(omit(user.toJSON(), "password")); // wrap user in omit, toJSON converts into plain json object, "password" omits password
    } catch (e: any) {
        logger.error(e)
        return res.status(409).send(e.message); // 409 - conflict(user with email already registered)
    }
};