import { IRoute } from "nralcm/common";
import { UserController } from "./controllers/user.controller";

/**
 * Add all routes of project here
 */
export const routes: IRoute[] = [
    { path: "user", controller: UserController }
];