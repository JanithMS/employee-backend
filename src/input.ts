import { IsEmail, IsMobilePhone } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType("CreateEmployeeInput")
export class CreateEmployeeInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsMobilePhone("en-IN")
  number: string;
}

@InputType("UpdateEmployeeInput")
export class UpdateEmployeeInput {
  @Field({ nullable: true })
  firstName: string;

  @Field({ nullable: true })
  lastName: string;

  @Field({ nullable: true })
  @IsEmail()
  email: string;

  @Field({ nullable: true })
  @IsMobilePhone("en-IN")
  number: string;
}
