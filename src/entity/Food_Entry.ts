import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Food_Entry {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    food_name: string;

    @Column()
    date: string;

    @Column()
    FK_profile: number;

}
