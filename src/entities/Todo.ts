import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Type } from 'class-transformer';
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
  @Type(() => Boolean)
  isDone: boolean = false;
}
