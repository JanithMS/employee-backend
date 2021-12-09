import { Arg, Mutation, Query, Resolver } from "type-graphql";
import Employee from "./entities";
import { CreateEmployeeInput, UpdateEmployeeInput } from "./input";

@Resolver(() => Employee)
export default class EmployeeResolver {
  @Query(() => Employee)
  async getEmployee(@Arg("EmployeeID") id: string) {
    return await Employee.findOneOrFail(id);
  }

  @Query(() => [Employee])
  async getAllEmployees() {
    return await Employee.find();
  }

  @Mutation(() => Boolean)
  async createEmployee(@Arg("CreateEmployeeInput") data: CreateEmployeeInput) {
    const employee = await Employee.create({ ...data }).save();
    return !!employee;
  }

  @Mutation(() => Boolean)
  async updateEmployee(
    @Arg("EmployeeID") id: string,
    @Arg("UpdateEmployeeInput") data: UpdateEmployeeInput
  ) {
    const { affected } = await Employee.update(id, { ...data });
    return affected === 1;
  }

  @Mutation(() => Boolean)
  async deleteEmployee(@Arg("EmployeeID") id: string) {
    const { affected } = await Employee.delete(id);
    return affected === 1;
  }
}
