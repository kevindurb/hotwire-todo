import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsBoolean } from 'class-validator';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column()
  description: string;

  @IsBoolean()
  @Column()
  @Transform(({ value }) => {
    console.log(value);
    return JSON.parse(value);
  })
  isDone: boolean = false;
}
