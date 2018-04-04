import { BaseController } from "nralcm/lifecycle";
import { User } from "../models/user";
import { Controller, Route } from "nralcm/decorators";
import { HttpMethod } from "nralcm/common";
import { UserReposiory } from "../repository/user.repository";

@Controller()
export class UserController extends BaseController {
    constructor(private userReposiory: UserReposiory) {
        super();
    }

    @Route(HttpMethod.GET,)
    /**
     * api/user [Get]
     */
    public get() {
        return this.userReposiory.getUsers();
    }

    @Route(HttpMethod.POST)
    /**
     * api/user [Post]
     */
    public post(user: User) {
        return this.userReposiory.newUser(user);
    }

}