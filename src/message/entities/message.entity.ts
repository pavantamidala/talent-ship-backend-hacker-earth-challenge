import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  message: string;
  @Column()
  sendTitme: number;
  @Column()
  createdOn: number;
  @Column()
  modifiedOn: number;
  @Column()
  status: string;

  @AfterInsert()
  insert() {
    console.log(`inserted user id with ${this.id}`);
  }
  @AfterRemove()
  remove() {
    console.log(`removed user id with ${this.id}`);
  }
  @AfterUpdate()
  update() {
    console.log(`updated user id with ${this.id}`);
  }
}
