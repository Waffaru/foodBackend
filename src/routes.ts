import {UserController} from "./controller/UserController";
import {MessageController} from "./controller/MessageController";

export const Routes = [{
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
}, {
    method: "get",
    route: "/messages",
    controller: MessageController,
    action: "all"
}, {
    method: "get",
    route: "/messages/:id",
    controller: MessageController,
    action: "one"
}];

