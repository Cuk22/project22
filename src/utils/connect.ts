import mongoose from "mongoose";
import config from "config";

/* function connect() {
    const dbUri = config.get<string>('dbUri');

    return mongoose.connect(dbUri)
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((error) => {
        console.log("Could not connect to db");
        process.exit(1);
    }) 
}
 */

async function connect() {
    const dbUri = config.get<string>("dbUri");
    console.log("DB connected");

    try {
        await mongoose.connect(dbUri);
    } catch (error) {
        console.error("Could not connect to db");
        process.exit(1);
    }
    
}

export default connect;