//middleware for adding user to requested object
import { Request, Response, NextFunction } from "express";
import { get } from "lodash"; // safer way to access the property that we dont know if it exists or not
import { verifyJwt } from "../utils/jwt.utils";
import { reIssueAccessToken } from "../services/session.service";
import { string } from "zod";

const deserializeUser = async (req: Request, res: Response, next: NextFunction) => {
    // get access token from the request headers

    const accessToken = get(req, "headers.authorization", "").replace(/^Bearer\s/, ""); // Bearer is regex

    const refreshToken = get(req, "headers.x-refresh"); // get refresh token out of headers

    if (!accessToken) {
        return next();
    }

    const { decoded, expired } = verifyJwt(accessToken) // verifyJwt returning valid, expired and decoded

    if (decoded) { // if Jwt is valid
        res.locals.user = decoded; // attach user to res.locals.user
        return next();
    }

    if (expired && refreshToken) { //if token is expired AND have refresh token ~ re-issue an access token
        const newAccessToken = await reIssueAccessToken({refreshToken: "refreshToken"});

        if (newAccessToken) {
            res.setHeader("x-access-token", newAccessToken);
        }

        const result = verifyJwt(newAccessToken as string);

        res.locals.user = result.decoded;
        return next();

    }
/* This action is doing next: -get accessToken and refreshToken from headers (line 11, 13)
                              -if there is no accessToken return next (line 15)
                              -if there is accessToken try decoded (line 19)
                              -if decoded attach user to res.locals.user (line 21)    
                              -if token has expired and is refreshed token (line 26)
                              -if refreshed token is valid issue a new token (line 27)
                              -set new token on header (line 30)
                              -decode token and attach user back on res.locals (line 36-38)                  
*/
    return next();
};

export default deserializeUser;
