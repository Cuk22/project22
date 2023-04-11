//middleware for adding user to requested object
import { Request, Response, NextFunction } from "express";
import {get} from "lodash"; // safer way to access the property that we dont know if it exists or not
import { verifyJwt } from "../utils/jwt.utils";

const deserializeUser = (req: Request, res: Response, next: NextFunction) => {
// get access token from the request headers

const accessToken = get(req, "headers.authorization", "").replace(/^Bearer\s/, "") // Bearer is regex

if(!accessToken){
    return next();
}

const {decoded, expired} = verifyJwt(accessToken) // verifyJwt returning valid, expired and decoded

if(decoded){ // if Jwt is valid
    res.locals.user = decoded; // attach user to res.locals.user
    return next();
}
return next();
};

export default deserializeUser;