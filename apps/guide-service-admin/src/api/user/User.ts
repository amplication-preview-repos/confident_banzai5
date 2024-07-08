import { JsonValue } from "type-fest";
import { Location } from "../location/Location";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  locations?: Array<Location>;
};
