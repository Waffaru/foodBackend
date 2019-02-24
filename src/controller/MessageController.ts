import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Message} from "../entity/Message";

export class MessageController {

    private messageRepository = getRepository(Message);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.messageRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.messageRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.messageRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.messageRepository.findOne(request.params.id);
        await this.messageRepository.remove(userToRemove);
    }

}