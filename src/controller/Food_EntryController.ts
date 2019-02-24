import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Food_Entry} from "../entity/Food_Entry";

export class Food_EntryController {

    private food_entryRepository = getRepository(Food_Entry);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.food_entryRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.food_entryRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.food_entryRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.food_entryRepository.findOne(request.params.id);
        await this.food_entryRepository.remove(userToRemove);
    }

}