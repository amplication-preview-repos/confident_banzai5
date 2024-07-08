import { InputJsonValue } from "../../types";
import { LocationCreateNestedManyWithoutUsersInput } from "./LocationCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  locations?: LocationCreateNestedManyWithoutUsersInput;
};
