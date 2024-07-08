import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LocationCreateInput = {
  latitude?: number | null;
  longitude?: number | null;
  user?: UserWhereUniqueInput | null;
  name?: string | null;
};
