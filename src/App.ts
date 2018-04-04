import * as express from "express";
import { HandlerDispatcher, RestApiConfiguration, HttpConfiguration } from "nralcm/lifecycle";
import * as bodyparser from "body-parser";
import { getContext } from "nralcm/common";
import { AppConfig } from "./app-config";
import { Request, Response } from "express-serve-static-core";
import { SyntaxErrorException } from "nralcm/exceptions";

class App {
    private restApiConfiguration = new RestApiConfiguration();
    private httpConfiguration: HttpConfiguration = new HttpConfiguration(this.restApiConfiguration);
    /**
     * property of type express to hold Express Object
     */
    public express: express.Express;

    /**
     * Handler Dispatcher dispatches request to registered handler
     */

    constructor() {
        this.express = express();
        // using body-parser ro parse body of request as json
        this.express.use(bodyparser.json());

        // created objected of RestApiConfiguration. RestApiConfiguration class is for configuration of rest api
        new AppConfig(this.restApiConfiguration).register();

        this.express.use((err: any, req: Request, res: Response, next: any): void|SyntaxErrorException => {
            if (err) {
                if (err instanceof SyntaxError) {
                    // console.log("syntax err");
                    return new SyntaxErrorException(getContext(req, res));
                }
                console.log(err);
                return;
            }
            next();
        });
        this.mountRoutes();
    }

    private mountRoutes(): void {
        const router = express.Router();
        router.all("*", (request, response) => {
            HandlerDispatcher.processHandler(request, response, this.httpConfiguration);
        });

        this.express.use("/", router);
    }
}

export default new App().express;