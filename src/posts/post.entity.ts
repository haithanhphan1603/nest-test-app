import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  private id: number;

  @Column()
  private title: string;

  @Column()
  private content: string;
}
