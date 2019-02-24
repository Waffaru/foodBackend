import {UserController} from "./controller/UserController";
import {MessageController} from "./controller/MessageController";
import {ProfileController} from "./controller/ProfileController"
import {Food_EntryController} from "./controller/Food_EntryController"
import {Food_ValueController} from "./controller/Food_ValueController"

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
}, {
    method: "get",
    route: "/profiles",
    controller: ProfileController,
    action: "all"
}, {
    method: "get",
    route: "/profile/:id",
    controller: ProfileController,
    action: "one"
}, {
    method: "post",
    route: "/profile",
    controller: ProfileController,
    action: "save"
}, {
    method: "get",
    route: "/food_entry",
    controller: Food_EntryController,
    action: "all"
}, {
    method: "get",
    route: "/food_entry/:id",
    controller: Food_EntryController,
    action: "one"
}, {
    method: "post",
    route: "/food_entry",
    controller: Food_EntryController,
    action: "save"
}, {
    method: "get",
    route: "/food_value",
    controller: Food_ValueController,
    action: "all"
}, {
    method: "get",
    route: "/food_value/:id",
    controller: Food_ValueController,
    action: "one"
}, {
    method: "post",
    route: "/food_value",
    controller: Food_ValueController,
    action: "save"
}];

