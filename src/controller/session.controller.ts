import { Request, Response } from "express";
import { validatePassword } from "../services/user.service";
import { createSession } from "../services/session.service";
import { signJwt } from "../utils/jwt.utils";
import config from "config";


export async function createUserSessionHandler(req: Request, res: Response) {
    
    // Validate users password (create a service in users service for validating users password)
    const user = await validatePassword(req.body);

    if (!user) {
        return res.status(401).send("Invalid email or password");
    }

    // create a session
    const session = await createSession(user._id, req.get("user-agent") || ""); // get userAgent from req.object or set user to an empty string
   
    // create an access token
    const accessToken = signJwt(
        { ...user, session: session._id },  // payload
        { expiresIn: config.get("accessTokenTtl") }
    ); 

    // create a refresh token
    const refreshToken = signJwt(
        { ...user, session: session._id },
        { expiresIn: config.get("accessTokenTtl")}
    );

    // return access & refresh token

    return res.send({accessToken, refreshToken});
};