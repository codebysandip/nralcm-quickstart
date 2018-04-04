import { Required } from "nralcm/validators";

export class User {
    @Required()
    firstName: string;
    @Required("LastName", "Last Name is required")
    lastName: string;
}