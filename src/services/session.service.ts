import { FilterQuery, UpdateQuery } from "mongoose";
import SessionModel, { SessionDocument } from "../models/session.model"
import { verifyJwt } from "../utils/jwt.utils";
import { get } from "lodash";
import { findUser } from "./user.service";


export async function createSession(userId: string, userAgent: string) { //props: userId, userAgent
    const session = await SessionModel.create({ user: userId, userAgent});

    return session.toJSON();
    
}

export async function findSessions(query: FilterQuery<SessionDocument>) {
    return SessionModel.find(query).lean();
// every query to this model is going to require .lean
// .lean = its not going to return all the functions on the object 
//         its just going to return the plain old object (same as to json)
    
}

export async function updateSession(
    query: FilterQuery<SessionDocument>, // find session we want to update
    update: UpdateQuery<SessionDocument> // what we want to update session to
) { 
    return SessionModel.updateOne(query, update);
};

export async function reIssueAccessToken({refreshToken}:{refreshToken: string}) {
    const {decoded} = verifyJwt(refreshToken) // decode refresh token to be sure its valid

    if (!decoded || !get(decoded, '_id')) return false // if not decoded or dont have an id on decoded refresh token
                                                       // _id = session_id, need session id to make sure this session is still valid before we issue an access token
                                                       // return false if conditions are not met 
    
    
    const session = await SessionModel.findById(get(decoded, "_id")) // get session

    if (!session || !session.valid) return false;

    const user = await findUser({ _id: session.user});

    if (!user) return false
};