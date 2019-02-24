import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Food_Value} from "../entity/Food_Value";

export class Food_ValueController {

    private Food_valueRepository = getRepository(Food_Value);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.Food_valueRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.Food_valueRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.Food_valueRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.Food_valueRepository.findOne(request.params.id);
        await this.Food_valueRepository.remove(userToRemove);
    }

}