import { Repository } from "nralcm/decorators";
import { User } from "../models/user";

@Repository()
export class UserReposiory {
    private static users: User[] = [];

    public getUsers() {
        return UserReposiory.users;
    }

    public newUser(user: User) {
        UserReposiory.users.push(user);
        return true;
    }
}