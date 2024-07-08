import { InputJsonValue } from "../../types";
import { LocationUpdateManyWithoutUsersInput } from "./LocationUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  locations?: LocationUpdateManyWithoutUsersInput;
};
