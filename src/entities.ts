import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  BeforeInsert,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("EmployeeData")
@ObjectType("Employee")
export default class Employee extends BaseEntity {
  @BeforeInsert()
  setEmployeeID() {
    const min = 10000;
    const max = 99999;
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    this.employeeID = num.toString();
  }

  @PrimaryGeneratedColumn("uuid")
  @Field()
  id: string;

  @Column()
  @Field()
  firstName: string;

  @Column()
  @Field()
  lastName: string;

  @Column()
  @Field()
  employeeID: string;

  @Column()
  @Field()
  email: string;

  @Column()
  @Field()
  number: string;
}
