import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import {} from 'class-validator';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  isDone: boolean;
}
