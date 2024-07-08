import { User } from "../user/User";

export type Location = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  latitude: number | null;
  longitude: number | null;
  user?: User | null;
  name: string | null;
};
