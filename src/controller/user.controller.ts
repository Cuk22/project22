import { Request, Response } from "express";
import { createUser } from "../services/user.service";
import logger from "../utils/logger";
import { CreateUserInput } from "../schema/user.schema";

export async function createUserHandler(req: Request<{}, {}, CreateUserInput>["body"], res: Response) { // all handlers are going to take same input
    try {
        const user = await createUser(req.body) // call create user service
        return user;
    } catch (e) {
        logger.error(e)
        return res.status(409).send(e.message); // 409 - conflict(user with email already registered)
    }
};