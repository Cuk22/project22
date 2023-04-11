import { FilterQuery, UpdateQuery } from "mongoose";
import SessionModel, { SessionDocument } from "../models/session.model"


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