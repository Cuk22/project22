import express from "express";
import config from "config";
import connect from "./utils/connect";
import logger from "./utils/logger";
import routes from "./routes";
import deserializeUser from "./middleware/deserializeUser";

const port = config.get<number>("port");

const app = express();

app.use(express.json());           // middleware that comes with express
                                   // it will apply this middleware to every single route under this call (all routes defined in line 18)

app.use(deserializeUser); // middleware getting called on every endpoint of every request

app.listen(port, async () => {
    logger.info(`App is running at http://localhost:${port}`);

    await connect();

    routes(app);
});

// express.json handles the request body