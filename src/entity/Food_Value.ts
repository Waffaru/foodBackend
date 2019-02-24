import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Food_Value {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    calorie: number;

    @Column()
    fiber: number;

    @Column()
    protein: number;

    @Column()
    FK_food: number

}
