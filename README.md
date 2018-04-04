# Quickstart Guide of nralcm

nralcm provides a environment to start project development from first day. Instead to focus on project architecture, it gives you flexibilty to start writing api from first day.

## Steps to start

 - Clone this repository. If you don't know how to clone, follow this [link].(https://help.github.com/articles/cloning-a-repository/)
 - Move to folder nralcm-quickstart and Install packages from terminal using command `npm install`.
 - Type `npm start` in terminal. Project will compile and server will run on localhost with port 3000.
 - Open browser and paste following url in browser's tab: http://localhost:3000/api/user

## Steps to create api
Let say you are going to create an api for product.

 - Create a typescript file **product.controller.ts** in **src/controllers** folder.
 - Create a class ProductController and extend it with BaseController class.   

	    import { BaseController } from  "nralcm/lifecycle";
        
        export  class ProductController extends BaseController {
        
        }

 - Decorate ProductController with Controller decorator. Every controller must decorate with Controller decorator. To know more about decorators visit this http://www.typescriptlang.org/docs/handbook/decorators.html

    
        
        import { BaseController } from  "nralcm/lifecycle";
        import { Controller } from  "nralcm/decorators";
        
		@Controller()
        export  class ProductController extends BaseController {
        
        }

 - Create an api method and decorate method with Route decorator. Route decorator accepts two arguments. Api method is the place where you will write  code to get data from database or any other logic.
        
		import { BaseController } from  "nralcm/lifecycle";
        import { Controller, Route } from  "nralcm/decorators";
        import { HttpMethod } from  "nralcm/common";
        
		@Controller()
        export  class ProductController extends BaseController {
        
	        @Route(HttpMethod.Get)
	        public get() {
		        return { firstName: "Test", lastName: "User" };
	        }
        }
 - Now register ProductController in src/app-routes.ts.

        import { IRoute } from  "nralcm/common";
	    import { UserController } from  "./controllers/user.controller";
	    import { ProductController } from  "./controllers/product.controller";
	    
	    export  const routes: IRoute[] = [
		    { path: "user", controller: UserController },
		    { path: "product", controller: ProductController }
	    ];
   

 - product api is now available to consume. Open browser and type http://localhost:3000/api/product

