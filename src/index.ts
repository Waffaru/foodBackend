import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {Routes} from "./routes";
import {User} from "./entity/User";


// Initializing array used for Routes
let routesArray = [];

for(var key in Routes) {
    //Use each key to access the array of the Route and concatenate it to routesArray
    routesArray = routesArray.concat(Routes[key]);
}

createConnection().then(async connection => {

    // create express app
    const app = express();
    app.use(bodyParser.json());

    // register express routes from defined application routes

    console.log(routesArray);
    routesArray.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });


    //setting up authentication filters
    app.all('/')

    // setup express app here
    // ...

    // start express server
    app.listen(3000);

    

    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");

}).catch(error => console.log(error));
