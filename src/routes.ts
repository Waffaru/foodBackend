import {UserController} from "./controller/UserController";
import {MessageController} from "./controller/MessageController";
import {ProfileController} from "./controller/ProfileController"
import {Food_EntryController} from "./controller/Food_EntryController"
import {Food_ValueController} from "./controller/Food_ValueController"

export const Routes =
    {
        users:[{
            method: "get",
            route: "/users",
            controller: UserController,
            action: "all"
        }, {
            method: "get",
            route: "/users/:id",
            controller: UserController,
            action: "one"
        }, {
            method: "post",
            route: "/users",
            controller: UserController,
            action: "save"
        }, {
            method: "delete",
            route: "/users/:id",
            controller: UserController,
            action: "remove"
        }],

        messages:[{
            method: "get",
            route: "/messages",
            controller: MessageController,
            action: "all"
        }, {
            method: "get",
            route: "/messages/:id",
            controller: MessageController,
            action: "one"
        }],

        profiles:[{
            method: "get",
            route: "/profiles",
            controller: ProfileController,
            action: "all"
        }, {
            method: "get",
            route: "/profiles/:id",
            controller: ProfileController,
            action: "one"
        }, {
            method: "post",
            route: "/profiles",
            controller: ProfileController,
            action: "save"
        }],

        foodEntries:[{
            method: "get",
            route: "/food-entries",
            controller: Food_EntryController,
            action: "all"
        }, {
            method: "get",
            route: "/food-entries/:id",
            controller: Food_EntryController,
            action: "one"
        }, {
            method: "post",
            route: "/food-entries",
            controller: Food_EntryController,
            action: "save"
        }],
        
        foodValues:[{
            method: "get",
            route: "/food-values",
            controller: Food_ValueController,
            action: "all"
        }, {
            method: "get",
            route: "/food-values/:id",
            controller: Food_ValueController,
            action: "one"
        }, {
            method: "post",
            route: "/food-values",
            controller: Food_ValueController,
            action: "save"
        }],
    };

