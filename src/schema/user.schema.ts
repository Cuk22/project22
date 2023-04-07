// this schema will be used for all of our users endpoints
import { object, string, TypeOf } from "zod";

export const createUserSchema = object({ // definition for payload
    body: object({                       // body equals to another object
        name: string({
            required_error: "Name is required"
        }),
        password: string({
            required_error: "Password is required"
        }).min(6, "Password too short - should be 6 chars minimum"),
    passwordConfirmation: string({
            required_error: "PasswordConfirmation is required"
        }),
        email: string({
            required_error: "Email is required",
        }).email("Not a valid email")
    }).refine((data) => data.password === data.passwordConfirmation, { //callback with argument named data
        message: "Password do not match",
        path: ["passwordConfirmation"],
    }),
});

export type CreateUserInput = Omit<TypeOf<typeof createUserSchema>, "body.passwordConfirmation">;