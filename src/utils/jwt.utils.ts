import jwt from "jsonwebtoken";
import config from "config";

const privateKey = config.get<string>("privateKey");
const publicKey = config.get<string>("publicKey");

// sign jwt with a private key
export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {     // object = jwt payload
    // options? = optional parametars of object   
    return jwt.sign(object, privateKey, {
        ...(options && options), // spread options here to provide an algorithm options                            
        algorithm: "RS256" // allow us to use private and public keys
    })
}

// verify jwt with a public key
export function verifyJwt(token: string) {
    try {
        const decoded = jwt.verify(token, publicKey)
        return {
            valid: true,
            expired: false,
            decoded,
        };
    } catch (e: any) {
        return {
            valid: false,
            expired: e.message === "jwt expired",
            decoded: null,

        };
    }
};


