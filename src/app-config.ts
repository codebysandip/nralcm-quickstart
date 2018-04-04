import { RestApiConfiguration } from "nralcm/lifecycle";
import { routes } from "./app-routes";

export class AppConfig {
    constructor (private restApiConfiguration: RestApiConfiguration) {
    }
    
    public register(): void {
        this.restApiConfiguration.addRoutes(routes);
    }
}