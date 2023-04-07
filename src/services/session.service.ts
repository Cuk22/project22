import SessionModel from "../models/session.model"


export async function createSession(userId: string, userAgent: string) { //props: userId, userAgent
    const session = await SessionModel.create({ user: userId, userAgent});

    return session.toJSON();
    
}