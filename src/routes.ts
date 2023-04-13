import { Express, Request, Response } from "express";
import { createUserHandler } from "./controller/user.controller";
import validateResourse from "./middleware/valivateResourse";
import { createUserSchema } from "./schema/user.schema";
import { createUserSessionHandler, deleteSessionHandler, getUserSessionsHandler } from "./controller/session.controller";
import { createSessionSchema } from "./schema/session.schema";
import requireUser from "./middleware/requireUser";
import { createProductSchema, deleteProductSchema, getProductSchema, updateProductSchema } from "./schema/product.schema";
import { createProductHandler, deleteProductHandler, getProductHandler, updateProductHandler } from "./controller/product.controller";


function routes(app: Express) {
    app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200)); 

    app.post("/api/users", validateResourse(createUserSchema), createUserHandler); /* this way request not being validated at all
                                                                                     need to add middleware between path and handler to validate handler*/

    app.post("/api/sessions", validateResourse(createSessionSchema), createUserSessionHandler);

    app.get("api/sessions", requireUser, getUserSessionsHandler);

    app.delete("api/sessions", requireUser, deleteSessionHandler);

    app.post("/api/products", [requireUser, validateResourse(createProductSchema)], createProductHandler);

    app.put("/api/products/:productId", [requireUser, validateResourse(updateProductSchema)], updateProductHandler);

    app.get("/api/products/:productId", validateResourse(getProductSchema), getProductHandler);

    app.delete('/api/products/:productId', [requireUser, validateResourse(deleteProductSchema)], deleteProductHandler);

    };

export default routes;