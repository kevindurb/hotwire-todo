import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsNotEmpty, IsBoolean } from 'class-validator';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column()
  description: string = '';

  @IsBoolean()
  @Column()
  isDone: boolean = false;
}
